import React, { useState } from 'react';
import CompetenceContentCard from './CompetenceContentCard';
import CategoryTabs from './CategoryTabs';
import { workshops, courses, webinars } from './CompetenceData';

const Competence = () => {
    const [activeCategory, setActiveCategory] = useState('workshop');

    const renderContent = () => {
        switch (activeCategory) {
            case 'workshops':
                return workshops.map((content, index) => (
                    <CompetenceContentCard key={index} content={content} />
                ));
            case 'courses':
                return courses.map((content, index) => (
                    <CompetenceContentCard key={index} content={content} />
                ));
            case 'webinars':
                return webinars.map((content, index) => (
                    <CompetenceContentCard key={index} content={content} />
                ));
            default:
                return null;
        }
    };

    return (
        <div className="competence-section p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Competence and Development Programs</h2>
            <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <div className="content-cards mt-6 flex flex-col items-center w-full max-w-4xl"> {/* Set width to full and max-width to desired size */}
                {renderContent()}
            </div>
        </div>
    );
};

export default Competence;
