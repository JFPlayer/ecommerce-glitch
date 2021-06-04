import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const UserLogout = () => {
  const history = useHistory()

  useEffect(() => {
    //cerrar sesion
    history.push('/')
  }, [])

  return (
    <>
      
    </>
  )
}

export default UserLogout
