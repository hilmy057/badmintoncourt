import React from 'react';
import { Navigate } from 'react-router-dom';

const Booking = () => {
  const isAuthenticated = false; // Replace with your actual authentication check

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      {/* Booking page content */}
    </div>
  );
};

export default Booking;