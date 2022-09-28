import { Routes, Route, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav
      className='fixed top-5 left-10 flex space-x-10 text-emerald-900 dark:text-neutral-200'
      style={{ zIndex: 1 }}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/blog'>Blog</Link>
    </nav>
  );
}