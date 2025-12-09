import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import FleetSection from './components/FleetSection';
import ServicesSection from './components/ServicesSection';
// import { ScrollToTop } from './components/ScrollToTop'; // Optional: to implement later

// Placeholder for Details page
import YachtDetails from './pages/YachtDetails';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const Home = () => (
  <>
    <Hero />
    <FleetSection />
    <ServicesSection />
  </>
);

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yacht/:id" element={<YachtDetails />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
