import React from 'react'

import './Purchase.scss'

import PurchaseLayout from '../../components/Purchase/PurchaseLayout'
import PurchaseCart from '../../components/Purchase/PurchaseCart'
import PurchaseDataUser from '../../components/Purchase/PurchaseDataUser'
import PurchasePay from '../../components/Purchase/PurchasePay'
import PurchaseConfirmation from '../../components/Purchase/PurchaseConfirmation'

const Purchase = () => {
  return (
    <PurchaseLayout>
      <PurchaseCart/>
    </PurchaseLayout>
  )
}

export default Purchase
