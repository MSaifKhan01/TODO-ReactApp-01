import React from "react"
import {useNavigate} from 'react-router-dom';
const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error,setError]=React.useState(false)
    const navigate=useNavigate();

    const addProduct = async () => {
        console.log(!name);
        if(!name || !price || !category || !company)
        {
            setError(true)
            return false;
        }
       

        console.log(name, price, category, company)

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let  result = fetch("https://todo-app-48hu.onrender.com/add-product", {
            method:'post',
            body: JSON.stringify({ name, price, category,company, userId }),
                headers: {
            "Content-Type": "application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            
        }
       
    });
    // result = await result.json();
    navigate('/')
    // console.log("hell",result)
}
return (
    <div className="product">
        <h1>Add Product</h1>
        <input type="text" placeholder='Enter product name' className="inputBox1"
            value={name} onChange={(e) => { setName(e.target.value) }}
        />
       {error && !name && <span className="invalid-input">Enter valid Name</span>}
        <input type="text" placeholder='Enter product price' className="inputBox1"
            value={price} onChange={(e) => { setPrice(e.target.value) }}
        />
        {error && !price && <span className="invalid-input">Enter valid price</span>}
        <input type="text" placeholder='Enter product category' className="inputBox1"
            value={category} onChange={(e) => { setCategory(e.target.value) }}
        />
        {error && !category && <span className="invalid-input">Enter valid category</span>}
        <input type="text" placeholder='Enter product company' className="inputBox1"
            value={company} onChange={(e) => { setCompany(e.target.value) }}
        />
        {error && !company && <span className="invalid-input">Enter valid company</span>}
        <button onClick={addProduct} className="appButton">Add Product</button>
    </div>
)
}
export default AddProduct;