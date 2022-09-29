import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-emerald-900 dark:bg-neutral-200 transition ease transform duration-300`;

  return (
    <nav
      className='fixed top-5 left-5 flex  text-emerald-900 dark:text-neutral-200 space-x-10'
      style={{ zIndex: 1 }}
    >
      {/* Hamburger menu */}
      <button
        className='hamburger flex flex-col h-12 w-12 rounded justify-center items-center group'
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <div
          className={`
            ${hamburgerLine}
            ${isNavOpen
              ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
            }
          `}
        />
        <div
          className={`
            ${hamburgerLine}
            ${isNavOpen
              ? "-rotate-45 -translate-y-1 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
            }
          `}
        />
      </button>

      <ul className={isNavOpen
        ? "flex-col space-y-5"
        : "invisible"
      }>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </nav>
  );
}