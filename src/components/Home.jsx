import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { careerData } from '../data/careerData'

export default function Home() {
  const [searchResults, setSearchResults] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('search')
    if (query) {
      const results = Object.entries(careerData).filter(([domain, skills]) => {
        const domainMatch = domain.toLowerCase().includes(query.toLowerCase())
        const skillsMatch = skills.some(skill => 
          skill.name.toLowerCase().includes(query.toLowerCase())
        )
        return domainMatch || skillsMatch
      })
      setSearchResults(results)
    } else {
      setSearchResults(null)
    }
  }, [location.search])

  const renderCareerPaths = (paths) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {paths.map(([domain]) => (
        <motion.div
          key={domain}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to={`/roadmap/${encodeURIComponent(domain)}`}
            className="block w-full text-left glass-effect p-6 hover:bg-opacity-20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <h3 className="text-xl font-semibold text-white">{domain}</h3>
            <p className="mt-2 text-gray-300">Explore the roadmap</p>
          </Link>
        </motion.div>
      ))}
    </div>
  )

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        {searchResults ? 'Search Results' : 'Choose Your Career Path'}
      </h2>
      {searchResults ? (
        searchResults.length > 0 ? (
          renderCareerPaths(searchResults)
        ) : (
          <p className="text-white">No results found. Try a different search term.</p>
        )
      ) : (
        renderCareerPaths(Object.entries(careerData))
      )}
    </div>
  )
}