import React, { useState } from 'react'

import './UserProducts.scss'

import UserProductPreview from '../UserProductPreview'
import CatalogContent from '../../CatalogContent'

const UserProducts = () => {
  

  return (
    <div className="user-product">
      <UserProductPreview/>

      <div className="user-product__catalog">
        <CatalogContent type="preview-edit"/>
      </div>
    </div>
  )
}

export default UserProducts
