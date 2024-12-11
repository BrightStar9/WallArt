import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex">
      {/* Sidebar with fixed position */}
      <div className="w-64 h-screen p-6 flex flex-col items-center justify-start bg-gray-100 dark:bg-gray-800 fixed top-0 left-0">
        <Link to="/">
          <div className="flex items-center justify-center space-x-2">
            <img src="logo.png" alt="DALL-E Logo" className="w-20 h-20" />
            <h1 className="text-lg font-bold dark:text-white">WALL ART</h1>
          </div>
        </Link>

        {/* Navigation */}
        <hr className="w-full border-t border-blue-400 my-6" />
        <div className="flex flex-col space-y-4 mt-10">
          <Link
            to="/"
            className={`w-full py-2 px-4 shadow-md rounded-lg flex items-center space-x-2 transition-colors duration-200 ${
              location.pathname === "/"
                ? "bg-teal-500 text-white"
                : "bg-white dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-100 text-white"
            }`}
          >
            <svg
              viewBox="64 64 896 896"
              data-icon="smile"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className=""
            >
              <path d="M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z"></path>
            </svg>
            <span className="text-sm">Wall Art Generator</span>
          </Link>
          <Link
            to="/images"
            className={`w-full py-2 px-4 shadow-md rounded-lg flex items-center space-x-2 transition-colors duration-200 ${
              location.pathname === "/images"
                ? "bg-teal-500 text-white"
                : "bg-white dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-100 text-white"
            }`}
          >
            <svg
              viewBox="64 64 896 896"
              data-icon="picture"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className=""
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"></path>
            </svg>
            <span className="text-sm">Photo Gallery</span>
          </Link>
        </div>
      </div>

      {/* Main content area */}
      <div className="ml-52 p-6 w-full overflow-auto">
        {/* Your main content goes here, including any images or components */}
      </div>
    </div>
  );
};

export default Sidebar;
