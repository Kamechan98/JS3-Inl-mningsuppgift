import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import ProductDetails from "./pages/ProductDetails"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Checkout from './pages/Checkout'
import UserProfile from './pages/UserProfile'
import OrderList from './pages/OrderList'
import AddProduct from './pages/AddProduct'
import DeleteProduct from './pages/DeleteProduct'
import Edit from './pages/Edit'
import OrderDetails from './pages/OrderDetails'

const App = () => {

  return (
    <div>
        <Nav />
        <Routes>
            <Route path="/" element= { <Home/>}/>
            <Route path="/products" element= { <Products />}/>
            <Route path="/add-product" element= { <AddProduct/>}/>
            <Route path="/edit-product/:id" element= { <Edit/>}/>
            <Route path="/products/:id" element= { <ProductDetails/>}/>
            <Route path="/delete-product/:id" element= { <DeleteProduct/>}/>
            <Route path="/contact" element= { <Contact/>}/>
            <Route path= "/orders" element ={<OrderList/>}/>
            <Route path= "/orders/:id" element ={<OrderDetails/>}/>
            <Route path="/login" element= { <Login/>}/>
            <Route path="/registration" element= { <Registration/>}/>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/user' element={<UserProfile />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App