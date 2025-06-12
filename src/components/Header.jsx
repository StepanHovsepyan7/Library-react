import React from 'react';
import { Link } from 'react-router-dom';

function Header({ searchQuery, setSearchItem }) {
  return (
    <div className='w-full h-[50px] bg-black pt-2 fixed top-0 left-0 z-50'>
      <header className='flex justify-around items-center text-[20px]'>
        <div>
          <Link to={'/home'} className="text-white font-bold">Logo</Link>
        </div>
        <div className='flex gap-[20px] items-center'>
          <input
            type="text"
            placeholder='Search...'
            value={searchQuery}
            onChange={(e) => setSearchItem(e.target.value)}
            className='bg-transparent outline-none border-b-2 pl-2 text-white'
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
