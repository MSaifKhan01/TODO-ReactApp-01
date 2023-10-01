const express = require('express');
const cors = require("cors");
require('./db/config');
// const User = require("./db/User");
const Product = require('./db/Product');
const bcrypt = require("bcrypt")
const Jwt = require('jsonwebtoken');
const conncetion = require('./db/config');
const userModel = require("./db/User")


const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());
const jwtKey = process.env.jwtKey;
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hash the password securely using bcrypt
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).json({ msg: "Password hashing failed" });
            }

            const user = new userModel({ name, email, password: hash });

            try {
                const result = await user.save();
                const { password: _, ...userWithoutPassword } = result.toObject();

                Jwt.sign({ user: userWithoutPassword }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                    if (err) {
                        return res.status(500).json({ msg: "Something went wrong, please try again later" });
                    }
                    res.json({ user: user, auth: token });
                });
            } catch (error) {
                res.status(500).json({ msg: "Registration failed" });
            }
        });
    } catch (error) {
        res.status(500).json({ msg: "Registration failed" });
    }



})

app.post("/login", async (req, res) => {


    let { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.status(200).send({ "msg": "login succesful", "name": user.name, user, "auth": Jwt.sign({ "userID": user._id }, jwtKey, { expiresIn: '3h' }) })


                } else {
                    res.status(401).send({ "msg": "login failed" })
                }
            })

        }

    } catch (err) {
        return res.status(500).send({ "msg": err.massage })
    }

})

app.post("/add-product", verifyToken, async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result)
})

app.get("/products", verifyToken, async (req, resp) => {
    let products = await Product.find();
    if (products.length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "no product found" })
    }
})


app.delete("/product/:id", verifyToken, async (req, resp) => {
    const result = await Product.deleteOne({ _id: req.params.id })
    resp.send(result);
})
app.get("/product/:id", verifyToken, async (req, resp) => {
    let result = await Product.findOne({ _id: req.params.id });
    if (result) {
        resp.send(result)
    } else {
        resp.send({ result: "No Record Found" })
    }
})

app.put("/product/:id", verifyToken, async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
});

app.get("/search/:key", verifyToken, async (req, resp) => {
    let result = await Product.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { category: { $regex: req.params.key } }
        ]
    })
    resp.send(result)
})
function verifyToken(req, resp, next) {
    let token = req.headers['authorization']
    if (token) {
        token = token.split(' ')[1];
        Jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {
                resp.status(401).send({ result: "Please provid valid token" })
            } else {
                next();
            }
        })
    } else {
        resp.status(403).send({ result: "Please add token with header" })
    }

}

app.listen(5000, async () => {
    await conncetion
    console.log("conected")
})

