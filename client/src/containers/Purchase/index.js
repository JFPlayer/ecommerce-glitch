import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
  const { purchaseProcessStep } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch({
        type: 'SET_PURCHASE_PROCESS_STEP',
        payload: 0
      })
    }
  }, [])

  return (
    <PurchaseLayout>
      {steps[purchaseProcessStep] || steps[0]}
      {purchaseProcessStep !== 0 && purchaseProcessStep < steps.length && <PurchaseSummary/>}
    </PurchaseLayout>
  )
}

export default Purchase
