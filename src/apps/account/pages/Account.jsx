import React from 'react'
import { Link } from 'react-router'


const Account = () => {
  return (
    <div>
      <p>This is the account app</p>
      <Link to={`/orders/`}>Orders</Link>
    </div>
  )
}

export default Account
