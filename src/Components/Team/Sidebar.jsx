// src/components/Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-10 lg:mt-0 mb-16 md:mb-0">
      <img
        src="https://www.lbl.gov/wp-content/uploads/2021/08/Mike_Witherell_sm_2.jpg"
        alt="Director"
        className="w-full h-auto rounded-md"
      />
      <span className="text-sm text-gray-600 block mt-4">More on the Director</span>
      <a href="#" className="text-blue-500 hover:underline block mt-2">
        Welcome message
      </a>
      <span className="text-sm text-gray-600 block mt-4">STATE OF THE LAB: OCT. 29, 2020</span>
      <iframe
        className="w-full h-48 mt-4 rounded-md"
        src="https://www.youtube.com/embed/PRLKi8IfARY?enablejsapi=1&origin=https://www.lbl.gov"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video Replay: State of the Lab Town Hall"
      ></iframe>
      <span className="text-sm text-gray-600 block mt-4">
        INCLUSION, DIVERSITY, EQUITY & ACCOUNTABILITY
      </span>
      <iframe
        className="w-full h-48 mt-4 rounded-md"
        src="https://www.youtube.com/embed/PRLKi8IfARY?enablejsapi=1&origin=https://www.lbl.gov"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video Replay: Inclusion, Diversity, Equity & Accountability"
      ></iframe>
    </div>
  );
};

export default Sidebar;
