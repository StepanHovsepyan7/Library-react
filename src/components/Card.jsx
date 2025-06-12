import React from 'react';

function Card({ title, author, editionCount, cover_id }) {
  const noImg = `/nocover.jpg`;

  const imageUrl = cover_id
    ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    : noImg;

  return (
    <div className='bg-white dark:bg-gray-800 cursor-pointer h-[470px] rounded-xl p-5 shadow-md w-64 hover:scale-105 transition-transform duration-300'>
      <img
        className="mb-4 w-full h-64 object-contain rounded"
        src={imageUrl}
        alt={title}
      />
      <h2 className='font-semibold text-lg text-gray-800 dark:text-white mb-2'>{author}</h2>
      <p className='text-gray-600 dark:text-gray-300 mb-2'>{title}</p>
      <p>
        <span className='text-sm text-gray-500 dark:text-gray-400'>Edition count:</span> {editionCount}
      </p>
    </div>
  );
}

export default Card;
