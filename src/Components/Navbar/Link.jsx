import React from 'react';

const Link = ({route}) => {
  return (
    <div>
      <li className='mr-10 px-4 hover:bg-gray-300'>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;