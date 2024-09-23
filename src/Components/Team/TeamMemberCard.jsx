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
      <img
        src={img_url || imgUrl} // Fallback to imgUrl if img_url is not present
        alt={name}
        className="w-32 h-32 object-cover rounded-full mr-6" // Changed to rounded-full for a circular image
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-blue-900">{name}</h3>
        {post && <p className="text-gray-600">{post}</p>}
        {title && <p className="text-gray-600">{title}</p>}
        {specialization && (
          <p className="text-gray-600">Specialization: {specialization}</p>
        )}
        {education && (
          <p className="text-gray-600">Education: {education}</p>
        )}
        <p className="mt-2 text-gray-700">{description}</p>
        {read_more && <p className="mt-2 text-gray-700 italic">{read_more}</p>}
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
