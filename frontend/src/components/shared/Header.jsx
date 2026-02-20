import React from "react";
import { useLocation } from "../../context/locationcontext";
import mainLogo from "../../assets/main-icon.png";
import map from "../../assets/pin.gif";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const { location, loading, error } = useLocation();

  return (
    <div className="w-full text-sm bg-white">
      {/* Top Header */}
      <div className="px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3">
          
          <div className="flex items-center">
            <img
              src={mainLogo}
              alt="logo"
              className="h-8 object-contain cursor-pointer"
            />
          </div>

          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for movies, events, plays, sports and activities"
                className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 text-sm font-medium cursor-pointer">

              {/* 🔄 Loading GIF */}
              {loading && (
                <img
                  src={map}
                  alt="loading location"
                  className="w-6 h-6"
                />
              )}
              {!loading && location && (
                <p>{location}</p>
              )}

              {!loading && error && (
                <p className="text-red-500">Location unavailable</p>
              )}

            </div>

            <button className="bg-[#f84464] text-white px-3 py-1.5 rounded text-sm font-medium">
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="bg-[#f2f2f2] px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2 text-gray-700">
          <div className="flex items-center space-x-6 font-medium">
            <span className="cursor-pointer hover:text-red-500">Movies</span>
            <span className="cursor-pointer hover:text-red-500">Events</span>
            <span className="cursor-pointer hover:text-red-500">Plays</span>
            <span className="cursor-pointer hover:text-red-500">Sports</span>
            <span className="cursor-pointer hover:text-red-500">Activities</span>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <span className="cursor-pointer hover:text-red-500">Corporates</span>
            <span className="cursor-pointer hover:text-red-500">Offers</span>
            <span className="cursor-pointer hover:text-red-500">Gift Cards</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
