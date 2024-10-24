
import React, { useState } from 'react';
import TeamMemberCard from './TeamMemberCard';
import CategoryTabs from './CategoryTabs';
import Sidebar from './Sidebar';
import { leadership, teamMembers, researchStudents } from './teamdata';
import { categories } from './Categories';

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState('leadership');

  const allTeamData = {
    leadership,
    researchAssociates: teamMembers.filter(
      (member) => member.category === 'researchAssociates'
    ),
    businessDevelopment: teamMembers.filter(
      (member) => member.category === 'businessDevelopment'
    ),
    researchAssistants: teamMembers.filter(
      (member) => member.category === 'researchAssistants'
    ),
    researchStudents,
  };

  return (
    <>
<div className=' h-28 md:h-[30vh] lg:h-24 w-full absolute -z-10 bg-blue-900 top-0'></div>
      <div className=" min-h-screen relative top-0 py-8 mb-52">
        {/* Navigation Section */}
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Main Content and Sidebar */}
        <div className="w-full lg:w-[95%] xl:w-[90%] mx-auto relative top-40 md:top-48 lg:top-36   mt-10 flex flex-col lg:flex-row lg:space-x-10">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-wrap justify-center gap-6"> {/* Change to flex and wrap */}
              {allTeamData[selectedCategory] && allTeamData[selectedCategory].length > 0 ? (
                allTeamData[selectedCategory].map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))
              ) : (
                <p className="text-center text-gray-700">No team members found in this category.</p>
              )}
            </div>
          </div>

          {/* Sidebar Section */}
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Team;
