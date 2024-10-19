import React from 'react';

const CompetenceContentCard = ({ content = {} }) => {
  const {
    title,
    description,
    imgUrl,
    date,
    readmore,
    category,
    presenter,
    link
  } = content;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col md:flex-row items-center mb-6">
      {/* Render imgUrl for both webinars/workshops and courses */}
      {imgUrl ? (
        <img
          src={imgUrl}
          alt={title}
          className="w-36 h-36 object-cover mb-3 md:mb-0 md:mr-6"  // Square shape with fixed width and height
        />
      ) : null}

      <div className="flex-1">
        <h3 className="text-xl font-bold text-blue-900">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
        
        {/* Display additional fields if available */}
        {date && <p className="mt-2 text-yellow-500">{date}</p>}
        {readmore && <p className="mt-2 text-gray-500">{readmore}</p>}
        {category && <p className="mt-2 text-gray-500"><strong>Category:</strong> {category}</p>}
        {presenter && <p className="mt-2 text-gray-500"><strong>Presenter:</strong> {presenter}</p>}

        {/* Display link if available */}
        <div className="mt-4">
          {link && (
            <a
              href={link}
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
