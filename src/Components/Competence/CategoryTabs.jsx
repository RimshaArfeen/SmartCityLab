import React from 'react';

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
    const categories = ['workshops', 'courses', 'webinars'];

    return (
        <div className="flex space-x-4">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg focus:outline-none ${
                        activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
                    }`}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
