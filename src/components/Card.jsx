import React from 'react'

function Card({ title, author, editionCount, cover_id }) {

    const noImg = `/nocover.jpg` 

    const imageUrl = cover_id
        ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
        : noImg;

    return (
        <div className='cursor-pointer'>
            <img className="mb-2 w-full h-64 object-contain rounded" src={imageUrl} alt="" />
            <h2 className='font-bold '>{author[0]?.name }</h2>
            <p className='max-w-[300px]'>{title}</p>
            <p>
                <span className='font-bold'>Edition count:</span > {editionCount}
            </p>
        </div>
    )
}

export default Card