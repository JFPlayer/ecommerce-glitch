import React, { useState } from 'react'

import './Purchase.scss'

import PurchaseLayout from '../../components/Purchase/PurchaseLayout'
import PurchaseCart from '../../components/Purchase/PurchaseCart'
import PurchaseDataUser from '../../components/Purchase/PurchaseDataUser'
import PurchasePay from '../../components/Purchase/PurchasePay'
import PurchaseConfirmation from '../../components/Purchase/PurchaseConfirmation'
import PurchaseSummary from '../../components/Purchase/PurchaseSummary'

const steps = [
  <PurchaseCart/>,
  <PurchaseDataUser/>,
  <PurchasePay/>,
  <PurchaseConfirmation/>
]

const Purchase = () => {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <PurchaseLayout>
      {steps[currentStep] || steps[0]}
      {currentStep !== 0 && currentStep < steps.length && <PurchaseSummary/>}
    </PurchaseLayout>
  )
}

export default Purchase
