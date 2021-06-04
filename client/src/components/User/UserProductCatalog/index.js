import React from 'react'

import './UserProductCatalog.scss'

import CatalogOrder from '../../CatalogOrder'
import CatalogFilter from '../../CatalogFilter'
import CatalogList from '../../CatalogList'

const UserProductCatalog = () => {
  return (
    <div className="user-pc">
      <div className="user-pc__filter">
        <CatalogOrder/>
        <CatalogFilter/>
      </div>
      <div className="user-pc__catalog">
        <CatalogList/>
      </div>
    </div>
  )
}

export default UserProductCatalog
