import React from 'react'
import { Link } from 'react-router'

const Orders = () => {
  return (
    <div>
      <p>This is the orders page</p>
      <Link to={`/`}>My Account</Link>
    </div>
  )
}

export default Orders
