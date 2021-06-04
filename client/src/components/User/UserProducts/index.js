import React, { useState } from 'react'

import './UserProducts.scss'

import UserProductPreview from '../UserProductPreview'
import UserProductCatalog from '../UserProductCatalog'

const UserProducts = () => {
  

  return (
    <>
      <UserProductPreview/>
      <UserProductCatalog/>
    </>
  )
}

export default UserProducts
