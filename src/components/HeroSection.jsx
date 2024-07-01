import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="public/images/herosection.jpeg" 
          alt="Tennis Court" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <div className="bg-white bg-opacity-85 p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="font-bold block text-sm text-orange-500 mb-1">CHOOSE COURT</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Lapanagan 1</option>
                <option>Lapanagan 2</option>
                {/* Add more options here */}
              </select>
            </div>
            <div>
              <label className="font-bold block text-sm text-orange-500 mb-1">DATE</label>
              <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="font-bold block text-sm text-orange-500 mb-1">DURATION</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>1 hour</option>
                {/* Add more options here */}
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
