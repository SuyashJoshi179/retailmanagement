import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Customer from './components/CustomerDashboard';
import Delivery from './components/DeliveryPersonelDash';
import Home from './components/HomeComponent';
import Retailer from './components/RetailerDashboard';
import Signup from "./components/SignUpComponent";
import CustomerOrders from "./components/CustomerOrders";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="customer" element={<Customer />} />
        <Route path="retailer" element={<Retailer />} />
        <Route path="delivery_personnel" element={<Delivery />} />
        <Route path="orders" element={<CustomerOrders />} />
      </Routes>
    </Router>
  );
}

export default App;
