import React from 'react'

import './PanelCLW.scss'
import EmptyCartIcon from '../../assets/emptyCartIcon.svg'
import HeartIcon from '../../assets/heartIcon.svg'

import PanelTabContentCart from '../PanelTabContentCart'

const PanelCLW = () => {
  return (
    <div className="panel-clw" onClick={e => e.stopPropagation()}>
      <div className="panel-clw__container">
        <div className="panel-clw__tabs-header">

          <div className="panel-clw__tabs--title">
            <EmptyCartIcon className="panel-clw__icon"/>
            <span>Carrito</span>
          </div>
          <div className="panel-clw__tabs--title">
            <HeartIcon className="panel-clw__icon"/>
            <span>Favoritos</span>
          </div>

        </div>
        <div className="panel-clw__tabs-content">

          {/* <PanelTabContent/> */}

          <div className="tabs-content__container">
            <PanelTabContentCart/>
            {/* <PanelTabContentWishList/> */}
          </div>
          

          {/* <div className="tabs-content">
            <div className="tabs-content__wish-list-body">
              
            </div>
            <div className="tabs-content__wish-list-footer">

            </div>
          </div> */}


        </div>
      </div>
    </div>
  )
}

export default PanelCLW
