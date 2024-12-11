import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b-[hsla(0,0%,87%,.557)] border">
      <h1 className="text-2xl font-semibold text-teal-500">WALL ART Generator</h1>
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white font-bold rounded-full">
          S
        </div>
        <span className="text-gray-700 font-medium">Scott Millar</span>
      </div>
    </div>
  );
};

export default Header;