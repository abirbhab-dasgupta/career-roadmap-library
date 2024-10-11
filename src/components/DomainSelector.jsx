import React from 'react'
import { careerData } from '../data/careerData'

export function DomainSelector({ onSelect }) {
  const handleChange = (event) => {
    if (onSelect && typeof onSelect === 'function') {
      onSelect(event.target.value)
    }
  }

  return (
    <div className="flex justify-center">
      <select
        onChange={handleChange}
        className="p-2 border rounded-md bg-green-700 text-white border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
      >
        <option value="">Select a domain</option>
        {Object.keys(careerData).map((domain) => (
          <option key={domain} value={domain}>
            {domain}
          </option>
        ))}
      </select>
    </div>
  )
}