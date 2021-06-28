import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

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
import SearchResult from "../SearchResult";

import { setSlideOutOpen } from '../../redux/globalDucks'

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 800px)")

  const loginTitleRef = useRef()
  const inputSearchRef = useRef()

  const { loggedIn, userFirstName, cart } = useSelector(state => state.user)
  const { slideOutOpen } = useSelector(state => state.global)
  const dispatch = useDispatch()

  const [positionXLogin, setPositionXLogin] = useState(0)
  const [onFocusSearchBar, setOnFocusSearchBar] = useState(false)
  const [shakeCart, setShakeCart] = useState(false)

  useEffect(() => {
    if(cart.length > 0) {
      setShakeCart(true)
      setTimeout(() => {
        setShakeCart(false)
      }, 500)
    }
  }, [cart])

  return (
    <>
      <header className="header">
        <nav className={`header__navbar ${(!isDesktop && onFocusSearchBar) ? 'search-active' : ''}`}>
          
          <Link to="/" className="header__logo">
            {isDesktop ? <Logo/> : <LogoSmall/>}
          </Link>

          <div
            onClick={() => dispatch(setSlideOutOpen(slideOutOpen ? '' : 'category'))}
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
            <SearchBar 
              isFocus={!isDesktop ? onFocusSearchBar : ''}
              ref={inputSearchRef}
            />
            <div className="header__search-btn"
              onClick={() => {
                setTimeout(() => inputSearchRef.current.select(), 50)
              }}
            ></div>
          </div>

          <div
            ref={loginTitleRef}
            onClick={() => {
              dispatch(setSlideOutOpen(slideOutOpen ? '' : 'login-box'))
              setPositionXLogin(getCenter(loginTitleRef).x)
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
            onClick={() => dispatch(setSlideOutOpen(slideOutOpen ? '' : 'panelclw'))}
            className={`header__title ${shakeCart ? 'shake' : ''}`}
          >
            {cart.length ?
              <>
                <RiShoppingCartFill />
                <div className="header__cart-count">
                  <div>
                    {cart.reduce((acc, {quantity}) => acc + quantity, 0)}
                  </div>
                </div>
              </>
            :
              <RiShoppingCart2Line />
            }
          </div>
        </nav>
      </header>
      
      {slideOutOpen && (
        <div 
          className={`slideout ${slideOutOpen}`}
          onClick={() => {
            dispatch(setSlideOutOpen(''))
          }}
        >
          {slideOutOpen === 'category' && (
            <CategoryMenu
            toClose={() => dispatch(setSlideOutOpen(''))}
            />
          )}
          {slideOutOpen === 'login-box' && (
            <LoginBox
            positionX={positionXLogin}
            toClose={() => dispatch(setSlideOutOpen(''))}
            />
          )}
          {slideOutOpen === 'panelclw' && (
            <PanelCLW
            toClose={() => dispatch(setSlideOutOpen(''))}
            />
          )}
          {slideOutOpen === 'searchResult' && (
            <SearchResult
            toClose={() => dispatch(setSlideOutOpen(''))}
            />
          )}
        </div>
      )}

    </>
  );
};

export default Header;
