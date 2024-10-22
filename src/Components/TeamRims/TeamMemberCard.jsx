import React from 'react';

const TeamMemberCard = ({ member }) => {
  const {
    post,
    name,
    title,
    description,
    img_url,
    fbUrl,
    linkedUrl,
    read_more,
    specialization,
    education,
    imgUrl, // For research students
  } = member;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg flex items-center mb-6">
      {/* Use square image instead of round by removing rounded-full */}
      <img
        src={img_url || imgUrl} // Fallback to imgUrl if img_url is not present
        alt={name}
        className="w-32 h-32 object-cover mr-6"  // Square shape with fixed width and height
      />
      <div className="flex-1">
        {/* Name in black, other details in gold */}
        <h3 className="text-xl font-bold text-black">{name}</h3>
        {post && <p className="text-yellow-500">{post}</p>}
        {title && <p className="text-yellow-500">{title}</p>}
        {specialization && (
          <p className="text-yellow-500">Specialization: {specialization}</p>
        )}
        {education && (
          <p className="text-yellow-500">Education: {education}</p>
        )}
        <p className="mt-2 text-gray-700">{description}</p>
        {read_more && <p className="mt-2 text-gray-700 italic">{read_more}</p>}
        
        {/* Social Media Links */}
        <div className="mt-4 flex space-x-4">
          {fbUrl && (
            <a
              href={fbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              aria-label={`${name}'s Facebook`}
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
          )}
          {linkedUrl && (
            <a
              href={linkedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              aria-label={`${name}'s LinkedIn`}
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
