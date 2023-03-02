import React from 'react';
import './navbar.css'
import logo from '../../assets/logo.png'

const navbar = () => {
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'contact'
    },
  ]

  return (
    <div className="flex items-center justify-between h-20 w-full px-72 py-14 fixed">
      <div className='w-32'>
        <img src={logo} alt="" />
      </div>  
      <ul className='flex justify-end'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-10 cursor-pointer uppercase tracking-widest hover:text-ascent  duration-150'>{link}</li>
        ))}
      </ul>
      <button className='px-6 py-2 border-2 border-ascent text-ascent rounded-full hover:bg-ascent hover:text-bg duration-150'>RESUME</button>
    </div>
  )
}

export default navbar