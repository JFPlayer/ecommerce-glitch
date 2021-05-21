import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import Logo from "../../assets/logo.svg";
import ArrowIcon from "../../assets/arrowIcon.svg";
import UserIcon from "../../assets/userIcon.svg";
import EmptyCartIcon from "../../assets/emptyCartIcon.svg";
import FilledCartIcon from "../../assets/filledCartIcon.svg";
import MenuIcon from "../../assets/menuIcon.svg";

import Slideout from '../Slideout'
import CategoryMenu from '../CategoryMenu'
import LoginBox from '../LoginBox'
import SearchBar from "../SearchBar"
import PanelCart from "../PanelCart"

const Header = () => {
const [isCategoryMenuActive, setIsCategoryMenuActive] = useState(false)
const [isLoginBoxActive, setIsLoginBoxActive] = useState(false)
const [isPanelCartActive, setIsPanelCartActive] = useState(true)

  return (
    <>
      <header className="header">
        <nav className="header__navbar">

          <Link to="/" className="header__logo">
            <Logo />
          </Link>

          <div onClick={() => setIsCategoryMenuActive(!isCategoryMenuActive)}>
            <span className="header__title">
              Categorias
              <ArrowIcon className="header__icon" />
            </span>
            {/* <button className="header__categories-button"><MenuIcon/></button> */}
          </div>

          <SearchBar/>

          <div onClick={() => setIsLoginBoxActive(!isLoginBoxActive)}>
            <span className="header__title">
              Iniciar sesión
              <UserIcon className="header__icon login-icon" />
            </span>
          </div>

          <div onClick={() => setIsPanelCartActive(!isPanelCartActive)}>
            <span className="header__title">
              <EmptyCartIcon className="header__icon cart-icon"/>
            </span>
          </div>

        </nav>
        </header>
        
        {isCategoryMenuActive && (
          <Slideout 
            top="80px" 
            toClose={() => setIsCategoryMenuActive(false)}
            Component= {CategoryMenu}
          />
        )}

        {isLoginBoxActive && (
          <Slideout 
            top="80px" 
            toClose={() => setIsLoginBoxActive(false)}
            Component={LoginBox}
          />
        )}

        {isPanelCartActive && (
          <Slideout
            toClose={() => setIsPanelCartActive(false)}
            Component={PanelCart}
          />
        )}

    </>
  );
};

export default Header;
