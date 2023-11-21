import React, { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const maxPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMaxPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: event.target.value
    }))
  }
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className="filters">
        <div>
            <label htmlFor={maxPriceFilterId}>Price from $0 to</label>
            <input
            style={{ backgroundColor: 'tomato' }}
            type='range'
            id={maxPriceFilterId}
            max='1800'
            min='0'
            onChange={handleChangeMaxPrice}
            value={filters.maxPrice}
            />
            <span>${filters.maxPrice}</span>
        </div>
        <div>
            <label htmlFor={categoryFilterId}>Category</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value='all'>All</option>
                <option value='home-decoration'>Home decoration</option>
                <option value='laptops'>Laptops</option>
                <option value='smartphones'>Smartphones</option>
                <option value='fragrances'>Fragrances</option>
                <option value='skincare'>Skincare</option>
                <option value='groceries'>Groceries</option>
            </select>
        </div>
    </section>
  )
}
