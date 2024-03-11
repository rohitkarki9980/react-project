
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Layout from './components/layout/Layout';

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>

            <Route path="/" element={<App/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/admin" element={<Admin/>}/>
            
          </Route>


            
        </Routes>
    </Router>
  );
}

export default MyRoutes;
