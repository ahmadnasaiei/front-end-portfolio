import React from 'react';
import './navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react';

const navbar = () => {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked")
      }
      else {
          setBurgerClass("burger-bar unclicked")
      }
      setIsMenuClicked(!isMenuClicked)
  }

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
    <div className="main flex justify-between items-center py-8 px-5 md:w-9/12 ml-auto mr-auto">
      
      <div className='block w-32 h-auto cursor-pointer z-10'>
        <a href="#"><img src={logo} alt="" /></a>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-10 cursor-pointer uppercase tracking-widest hover:text-ascent duration-150'>{link}</li>
        ))}
      </ul>

      <button className='hidden md:flex px-6 py-2 border-2 border-ascent text-ascent rounded-full hover:bg-ascent hover:text-bg duration-150'>RESUME</button>

      <div className='md:hidden z-10'>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>

      {isMenuClicked && (
        <>
        <ul className='flex md:hidden flex-col justify-center items-center absolute top-0 right-0 w-2/3 h-screen bg-primary text-light'>
          {links.map(({ id, link }) => (
            <li key={id} className='py-6 pl-6 text-xl cursor-pointer uppercase tracking-widest hover:text-ascent duration-150'>{link}</li>
          ))}
          <li className='py-6 pl-6 text-xl cursor-pointer uppercase tracking-widest'><button className='md:flex px-6 py-2 border-2 border-ascent text-ascent rounded-full hover:bg-ascent hover:text-primary duration-150'>RESUME</button></li>
        </ul>
        </>
      )}

      
      
    </div>
  )
}

export default navbar