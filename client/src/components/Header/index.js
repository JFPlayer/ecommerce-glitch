import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import Logo from "../../assets/logo.svg";
import ArrowIcon from "../../assets/arrowIcon.svg";
import SearchIcon from "../../assets/searchIcon.svg";
import UserIcon from "../../assets/userIcon.svg";
import EmptyCartIcon from "../../assets/emptyCartIcon.svg";
import FilledCartIcon from "../../assets/filledCartIcon.svg";
import MenuIcon from "../../assets/menuIcon.svg";

import LoginBox from '../LoginBox'

const initialState = [
  {
    title: "Gaming",
    subcategories: [
      {
        title: "Notebooks",
        url: "",
      },
      {
        title: "Monitores",
        url: "",
      },
      {
        title: "Teclados",
        url: "",
      },
      {
        title: "Mouse",
        url: "",
      },
      {
        title: "Auriculares",
        url: "",
      },
      {
        title: "Sillas gamer",
        url: "",
      },
    ]
  },
  {
    title: "Informatica",
    subcategories: [
      {
        title: "Notebook",
        url: "",
      },
      {
        title: "Tablets",
        url: "",
      },
      {
        title: "Impresoras",
        url: "",
      },
      {
        title: "Monitores",
        url: "",
      },
      {
        title: "Teclados",
        url: "",
      },
      {
        title: "Mouse",
        url: "",
      },
      {
        title: "Camaras web",
        url: "",
      },
      {
        title: "Procesadores",
        url: "",
      },
      {
        title: "Placas de video",
        url: "",
      },
      {
        title: "HDD y SDD",
        url: "",
      },
      {
        title: "Memorias",
        url: "",
      },
      {
        title: "Gabinetes",
        url: "",
      },
    ]
  },
  {
    title: "Consolas y Videojuegos",
    subcategories: [
      {
        title: "Playstation 4",
        url: "",
      },
      {
        title: "Playstation 5",
        url: "",
      },
      {
        title: "Nintendo",
        url: "",
      },
      {
        title: "Xbox",
        url: "",
      },
      {
        title: "Juegos",
        url: "",
      },
      {
        title: "Accesorios",
        url: "",
      },
      {
        title: "Gift card",
        url: "",
      },
    ]
  },
  {
    title: "Celulares",
    subcategories: [
      {
        title: "Celulares y Smartphones",
        url: "",
      },
      {
        title: "Smartwatch",
        url: "",
      },
      {
        title: "Cargadores",
        url: "",
      },
      {
        title: "Baterias externas",
        url: "",
      },
      {
        title: "Accesorios",
        url: "",
      },
    ]
  },
]

const Header = () => {
const [isCategoryMenuActive, setIsCategoryMenuActive] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hola");
  };

  return (
    <>
      <header className="header">
        <nav className="navbar-container">

          <Link to="/" className="logo">
            <Logo />
          </Link>

          <div className="menu" onClick={() => setIsCategoryMenuActive(!isCategoryMenuActive)}>
            <span className="menu-title">
              Categorias
              <ArrowIcon />
            </span>
            <button className="menu-button"><MenuIcon/></button>
          </div>

          <div className="search">
            <form className="search__field" onSubmit={handleSubmit}>
              <input type="text" />
              <button>
                <SearchIcon />
              </button>
            </form>
          </div>

          <div className="account">
            <span className="account-title">
              Iniciar sesión
              <UserIcon />
            </span>
          </div>

          <div className="cart">
            <span>
              <EmptyCartIcon />
            </span>
          </div>

        </nav>
        </header>

        {isCategoryMenuActive &&
          (<div className="slideout" style={{top: '80px'}} onClick={() => setIsCategoryMenuActive(false)}>
            <div className="slideout__category-menu" onClick={e => e.stopPropagation()}>
              <nav className="category-menu">
                {initialState.map(category => (
                  <div className="category-menu__list">
                    <Link className="category-menu__list-title">
                      {category.title}
                    </Link>
                    <ul>
                      {category.subcategories.map(subcategories => (
                        <Link>
                          <li>
                            <span className="category-menu__list-item">
                              {subcategories.title}
                            </span>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>)
        }

        <div className="slideout" style={{top: '80px'}}>
          <div className="slideout__login-container">
            <div className="login-grid">
              <LoginBox/>
            </div>
          </div>
        </div>
        
    </>
  );
};

export default Header;
