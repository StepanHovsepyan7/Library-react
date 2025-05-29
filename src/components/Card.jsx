import React from 'react'

function Card({ title, author, editionCount, cover_id }) {

    const imageUrl = cover_id
        ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
        : 'https://via.placeholder.com/150';

    return (
        <div className='cursor-pointer'>
            <img className="mb-2 w-full h-64 object-cover rounded" src={imageUrl} alt="" />
            <h2 className='font-bold '>{author.map((e) => e.name)}</h2>
            <p>{title}</p>
            <p>
                <span className='font-bold'>Edition count:</span > {editionCount}
            </p>
        </div>
    )
}

export default Card