
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Counter from './pages/Counter/';

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cart'element={<Cart/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/product" element={<Product/>}/>
           
          </Route>
          <Route path='/counter' element={<Counter/>}/>


            
        </Routes>
        
    </Router>
  );
}

export default MyRoutes;
