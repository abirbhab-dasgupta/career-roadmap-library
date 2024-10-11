import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="bg-gradient-to-r from-[#1a1a2e] to-[#0f3460] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between glass-effect p-4">
          <div>
            <Link to="/" className="text-4xl font-bold font-sans">Career Roadmap Library</Link>
            <p className="mt-2 text-xl font-sans font-light">Navigate Your Path to Success</p>
          </div>
          <form onSubmit={handleSearch} className="mt-4 md:mt-0 flex items-center">
            <Input
              type="search"
              placeholder="Search careers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 mr-2 text-gray-900 font-sans bg-white"
            />
            <Button type="submit" variant="secondary" className="font-sans font-medium bg-[#1a1a2e] hover:bg-[#0f3460] text-white">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </div>
    </header>
  )
}