import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Order from './pages/Order'
import Customers from './pages/Customers'




function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
         
                <Route path="/register" element={<Register />} />
                <Route path="/orders" element={<Order />} />
                <Route path="/customers" element={<Customers />} />
                
                               
            </Routes>
        </Router>
    )
}

export default App