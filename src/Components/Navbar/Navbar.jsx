import React from "react";
import Link from "./Link";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Services",
    path: "/services",
  },
  {
    id: 3,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 4,
    name: "About Us",
    path: "/about",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      {/* <ul className='flex'>
        <li className='mr-10'><a href="/">Home</a></li>
        <li className='mr-10'><a href="/about">About</a></li>
        <li className='mr-10'><a href="/blog">Blog</a></li>
      </ul> */}

      {/* <ul className="flex">
        {
            navigationData.map(route => <li className="mr-10"><a href={route.path}>{route.name}</a></li>)
        }
      </ul> */}

      <ul className="flex">
        {navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
