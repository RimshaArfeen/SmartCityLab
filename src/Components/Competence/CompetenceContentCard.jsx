import React from 'react';

const CompetenceContentCard = ({ content }) => {
  const {
    title,
    description,
    imgUrl,    // Image URL for both webinars/workshops and courses
    date,      // Date of the event or course
    readmore,  // Additional details or "read more" content
    category,  // Category of the content (optional)
    presenter  // Presenter or speaker (optional, if available)
  } = content;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg flex items-center mb-6">
      {/* Render imgUrl for both webinars/workshops and courses */}
      {imgUrl ? (
        <img
          src={imgUrl}  // Use imgUrl for both cases
          alt={title}
          className="w-32 h-32 object-cover rounded-full mr-6"
        />
      ) : null}

      <div className="flex-1">
        <h3 className="text-xl font-bold text-blue-900">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
        
        {/* Display additional fields if available */}
        {date && <p className="mt-2 text-gray-500">{date}</p>}
        {readmore && <p className="mt-2 text-gray-500">{readmore}</p>}
        {category && <p className="mt-2 text-gray-500"><strong>Category:</strong> {category}</p>}
        {presenter && <p className="mt-2 text-gray-500"><strong>Presenter:</strong> {presenter}</p>}

        {/* Display link if available */}
        <div className="mt-4">
          {content.link && (
            <a
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetenceContentCard;
