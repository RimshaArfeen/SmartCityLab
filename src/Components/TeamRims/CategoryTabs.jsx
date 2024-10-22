// src/components/CategoryTabs.js

import React from 'react';

const CategoryTabs = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => setSelectedCategory(category.key)}
          className={`px-4 py-2 rounded-lg transition-transform duration-300 ${
            selectedCategory === category.key
              ? 'bg-blue-700 scale-105'
              : 'bg-blue-900 hover:bg-blue-700 hover:scale-105'
          } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
