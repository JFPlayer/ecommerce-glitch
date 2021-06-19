import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

import "./Header.scss";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import { MdClose } from 'react-icons/md'


import Logo from "../../assets/logo.svg";
import LogoSmall from "../../assets/logo-small.svg";


import { getCenter } from '../../utils/getCenter'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import CategoryMenu from "../CategoryMenu";
import LoginBox from "../LoginBox";
import SearchBar from "../SearchBar";
import PanelCLW from "../PanelCLW";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 800px)")

  const refLoginTitle = useRef()

  const { loggedIn, userFirstName, userLastName } = useSelector(state => state.user)

  const [slideOutOpen, setSlideOutOpen] = useState('');
  const [positionXLogin, setPositionXLogin] = useState(0)
  const [onFocusSearchBar, setOnFocusSearchBar] = useState(false)

  return (
    <>
      <header className="header">
        <nav className={`header__navbar ${(!isDesktop && onFocusSearchBar) ? 'search-active' : ''}`}>
          
          <Link to="/" className="header__logo">
            {isDesktop ? <Logo/> : <LogoSmall/>}
          </Link>

          <div
            onClick={() => setSlideOutOpen(slideOutOpen ? '' : 'category')}
            className="header__title"
          >
            {slideOutOpen !== 'category' ? 
              <HiMenuAlt1 className="btn"/>
            :
              <MdClose className="btn"/>
            }
            <span className="txt">
              categorias
              <IoIosArrowDown/>
            </span>
          </div>

          <div 
            onClick={() => setOnFocusSearchBar(true)}
            onBlur={() => setOnFocusSearchBar(false)}
            className='header__search'
          >
            <SearchBar isFocus={!isDesktop ? onFocusSearchBar : ''}/>
            <div className="header__search-btn"></div>
          </div>

          <div
            ref={refLoginTitle}
            onClick={() => {
              setSlideOutOpen(slideOutOpen ? '' : 'login-box')
              setPositionXLogin(getCenter(refLoginTitle).x)
            }}
            className="header__title"
          >
            <BiUser className="btn"/>
            <span className="txt">
              {loggedIn ? `Hola ${userFirstName}` : 'Iniciar sesión'}
              <BiUser />
            </span>
          </div>

          <div
            onClick={() => setSlideOutOpen(slideOutOpen ? '' : 'panelclw')}
            className="header__title"
          >
            <RiShoppingCart2Line />
          </div>
        </nav>
      </header>
      
      {slideOutOpen && (
        <div 
          className={`slideout ${slideOutOpen}`}
          onClick={() => {
            setSlideOutOpen('')
          }}
        >
          {slideOutOpen === 'category' && (
            <CategoryMenu
            toClose={() => setSlideOutOpen('')}
            />
          )}
          {slideOutOpen === 'login-box' && (
            <LoginBox
            positionX={positionXLogin}
            toClose={() => setSlideOutOpen('')}
            />
          )}
          {slideOutOpen === 'panelclw' && (
            <PanelCLW
            toClose={() => setSlideOutOpen('')}
            />
          )}
        </div>
      )}

    </>
  );
};

export default Header;
