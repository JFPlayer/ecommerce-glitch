import React, { useState } from 'react'

import './PanelCLW.scss'
import EmptyCartIcon from '../../assets/emptyCartIcon.svg'
import HeartIcon from '../../assets/heartIcon.svg'

import PanelTabContent from './PanelTabContent'

const PanelCLW = ({ toClose }) => {
  const [isSelected, setIsSelected] = useState('cart')

  return (
    <div className="panel-clw" onClick={e => e.stopPropagation()}>
      <div className="panel-clw__container">
        <div className="panel-clw__tabs-header">
          <div className="panel-clw__tabs-titles">
            <button className="panel-clw__tabs-title" onClick={() => setIsSelected('cart')} >
              <EmptyCartIcon className="panel-clw__icon"/>
              <span>Carrito</span>
            </button>

            <button className="panel-clw__tabs-title" onClick={() => setIsSelected('wl')}>
              <HeartIcon className="panel-clw__icon"/>
              <span>Favoritos</span>
            </button>
          </div>

          <div className={`selected-tab `}>
            <div className={`${isSelected==='cart' ? '': 'right'}`}></div>
          </div>
        </div>

        <div className="panel-clw__tabs-content">
          <PanelTabContent selected= {isSelected}/>
        </div>

      </div>
    </div>
  )
}

export default PanelCLW
