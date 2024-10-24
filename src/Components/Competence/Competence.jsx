
import React, { useState } from 'react';
import CompetenceContentCard from './CompetenceContentCard';
import CategoryTabs from './CategoryTabs';
import { workshops, courses, webinars } from './CompetenceData';
import { NavLink } from 'react-router-dom';
const Competence = () => {
    const [activeCategory, setActiveCategory] = useState('workshops');

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
        <>
         <div className=' h-28 md:h-48 lg:h-28 w-full absolute -z-10 bg-blue-900 top-0'></div>
   
        <section>
        <div className="competence-section w-full p-6 mb-36 relative top-28 md:top-48 lg:top-28 z-10 flex flex-col items-center">
            {/* <h2 className="text-2xl font-bold mb-4 text-center">Competence and Development Programs</h2> */}
            <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <div className="content-cards mt-6 flex flex-col items-center w-full lg:w-5/6"
            data-aos="fade-up"> {/* Set width to full and max-width to desired size */}
                {renderContent()}
            </div>

        </div>

        </section>
        </>
    );
};

export default Competence;
