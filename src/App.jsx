import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CourtList from './components/CourtList';
import Login from './components/Login';
import Booking from './components/Booking'; // Asumsikan Anda memiliki komponen Booking
import Signup from './components/Signup';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <main>
                <CourtList />
              </main>
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/signup" element={<Signup />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;