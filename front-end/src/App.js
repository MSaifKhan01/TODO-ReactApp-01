
import './App.css'
import Nav from './Components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponenet';
import Login from './Components/Login';
import AddProduct from './Components/AddProducts';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';
function App() {
  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route path="/" element={<ProductList />}/>
        <Route path="/add" element={<h1>{<AddProduct/>}</h1>} />
        <Route path="/update/:id" element={<h1>{<UpdateProduct />}</h1>} />
        <Route path="/logout" element={<h1>Logout component</h1>} />
        <Route path="/profile" element={<h1>Profile component</h1>} />
        </Route>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
