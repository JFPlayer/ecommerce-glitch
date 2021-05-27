import React from 'react'
import { Link } from 'react-router-dom'

import './CategoryMenu.scss'

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

const CategoryMenu = ({ toClose }) => {
  return (
    <div className="category-menu" onClick={e => e.stopPropagation()}>
      <nav className="category-menu__container">
        {initialState.map(category => (
          <div className="category-menu__list" key={category.title}>
            <Link to='' className="category-menu__list-title">
              {category.title}
            </Link>
            <ul>
              {category.subcategories.map(subcategories => (
                <li key={subcategories.title}>
                  <Link to='' >
                    <span className="category-menu__list-item">
                      {subcategories.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default CategoryMenu