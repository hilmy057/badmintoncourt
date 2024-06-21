// src/components/CourtList.js

import React from 'react';
import CourtCard from './CourtCard';
import { courtsData } from '../data/courtData';

const CourtList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courtsData.map(court => (
          <CourtCard key={court.id} {...court} />
        ))}
      </div>
    </div>
  );
};

export default CourtList;
