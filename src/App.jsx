import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Roadmap from './components/Roadmap'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="glass-effect p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roadmap/:domain" element={<Roadmap />} />
            </Routes>
            <div className="mt-16">
              <About />
            </div>
            <div className="mt-16">
              <Contact />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}