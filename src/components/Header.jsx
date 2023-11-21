import React from 'react'
import { Filters } from './Filters'

export function Header () {
  return (
    <div className="header">
      <h1>Welcome to <strong>Shopper </strong></h1>
      <p>Search your products by price range and category</p>
      <Filters />
    </div>
  )
}
