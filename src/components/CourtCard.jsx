import React from 'react';

const CourtCard = ({ image, price, sport, name, location, date, time, court }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded">
          {price}/hour
        </div>
      </div>
      <div className="p-4">
        <p className="text-orange-500 uppercase text-sm font-semibold">{sport}</p>
        <h3 className="text-xl font-bold mt-1">{name}</h3>
        <p className="text-gray-600 mt-1">{location}</p>
        <div className="mt-4 space-y-2">
          <p className="flex items-center text-gray-600">
            <span className="mr-2">📅</span> {date}
          </p>
          <p className="flex items-center text-gray-600">
            <span className="mr-2">🕒</span> {time}
          </p>
          <p className="flex items-center text-gray-600">
            <span className="mr-2">🎾</span> {court}
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">Tes</button>
      </div>
    </div>
  );
};

export default CourtCard;