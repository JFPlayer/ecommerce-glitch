import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './CategoryMenu.scss'
import { IoIosArrowForward } from 'react-icons/io'

const initialState = [
  {
    title: "Gaming",
    url: '',
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
    url: '',
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
    url: '',
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
    url: '',
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
  const [selectedCategory, setSelectedCategory] = useState(null)

  const { categories } = useSelector(state => state.categories)

  const handleClick = event => {
    event.stopPropagation()
    if(event.target.nodeName === 'A') toClose()
  }

  return (
    <div className="category-menu" onClick={handleClick}>
      <nav className="category-menu__container">

        <ul className="category-menu__list-container">
          {categories.map((category, index) => (
            <li
              key={category._id}
              className="category-menu__list-item"
              onClick={() => {setSelectedCategory(index)}}
            >
              {category.title}
              <IoIosArrowForward/>
            </li>
          ))}
        </ul>
        {selectedCategory !== null && 
          <div className="category-menu__list-container subcategory">
            <Link 
              to={`/categories/${categories[selectedCategory]._id}`} 
              className="category-menu__list-item"
            >
              Ver todo {categories[selectedCategory].title}
            </Link>
            {categories[selectedCategory].subcategories.map(subcategory => (
              <Link
                key={subcategory._id}
                to={`/subcategories/${subcategory._id}`}
                className="category-menu__list-item"
              >
                {subcategory.title}
                <IoIosArrowForward/>
              </Link>
            ))}
          </div>
        }

        {categories.map(category => (
          <div 
            className="category-menu__list-container--desktop"
            key={category._id}
          >
            
            <Link
              className="category-menu__list-item--desktop title"
              to={`/categories/${category._id}`}
            >
              {category.title}
            </Link>

            {category.subcategories.map(subcategory => (
              <Link
                key={subcategory._id}
                className="category-menu__list-item--desktop"
                to={`/subcategories/${subcategory._id}`}
              >
                {subcategory.title}
              </Link>
            ))}
          </div>
        ))}

      </nav>
    </div>
  )
}
// const CategoryMenu = () => {
//   return (
//     <div className="category-menu" onClick={e => e.stopPropagation()}>
//       <nav className="category-menu__container">
//         {initialState.map(category => (
//           <div className="category-menu__list" key={category.title}>
//             <Link to='' className="category-menu__list-title">
//               {category.title}
//             </Link>
//             <ul>
//               {category.subcategories.map(subcategories => (
//                 <li key={subcategories.title}>
//                   <Link to='' >
//                     <span className="category-menu__list-item">
//                       {subcategories.title}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </nav>
//     </div>
//   )
// }

export default CategoryMenu
