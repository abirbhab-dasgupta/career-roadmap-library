import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { careerData } from '../data/careerData'

export default function SearchResults() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('q')

  const results = Object.entries(careerData).filter(([domain, skills]) => {
    const domainMatch = domain.toLowerCase().includes(query.toLowerCase())
    const skillsMatch = skills.some(skill => 
      skill.name.toLowerCase().includes(query.toLowerCase())
    )
    return domainMatch || skillsMatch
  })

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found. Try a different search term.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map(([domain, skills]) => (
            <motion.div
              key={domain}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={`/roadmap/${encodeURIComponent(domain)}`}
                className="block bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <h3 className="text-xl font-semibold text-gray-800">{domain}</h3>
                <p className="mt-2 text-gray-600">Explore the roadmap</p>
                <ul className="mt-4 text-sm text-gray-500">
                  {skills.slice(0, 3).map(skill => (
                    <li key={skill.name}>{skill.name}</li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}