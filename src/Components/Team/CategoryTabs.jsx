// src/components/CategoryTabs.js

import React from 'react';

const CategoryTabs = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap justify-center relative top-32 md:top-44 lg:top-24 gap-4">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => setSelectedCategory(category.key)}
          className={`px-4 py-2 rounded-lg transition-transform duration-300 ${
            selectedCategory === category.key
              ? 'bg-blue-700 scale-90 text-white'
              : 'bg-blue-100 hover:bg-blue-700 text-blue-800 hover:scale-105'
          }  focus:outline-none focus:ring-2 focus:ring-blue-500`}
          aria-pressed={selectedCategory === category.key}
          aria-label={`Show ${category.name} team members`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
