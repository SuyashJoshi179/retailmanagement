import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import './App.css';
import Customer from './components/CustomerDashboard';
import Delivery from './components/DeliveryPersonelDash';
import Home from './components/HomeComponent';
import Retailer from './components/RetailerDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customer" element={<Customer />}>
          <Route path="retailer" element={<Retailer />} />
          <Route path="delivery" element={<Delivery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
