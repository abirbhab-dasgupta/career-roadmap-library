import React from 'react'
import { motion } from 'framer-motion'
import { careerData } from '../data/careerData'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">About Career Roadmap Generator</h2>
      <div className="glass-effect p-6">
        <p className="mb-4 text-gray-300">
          Welcome to the Career Roadmap Library, your comprehensive guide to navigating the ever-evolving landscape of technology careers. Our platform offers a unique and interactive way to explore and plan your professional journey in the tech industry.
        </p>
        <p className="mb-4 text-gray-300">
          With an extensive collection of {Object.keys(careerData).length} career roadmaps, we cover a wide range of specializations from Web Development and Data Science to emerging fields like Quantum Computing and Bioinformatics. Each roadmap is carefully curated to provide you with a clear path of skills to acquire, from beginner to advanced levels.
        </p>
        <p className="mb-4 text-gray-300">
          Our platform is designed for everyone - whether you're a student just starting out, a professional looking to switch careers, or an experienced tech worker aiming to upskill. We provide not just a list of skills, but also carefully selected learning resources for each skill, ensuring you have the best materials to guide your learning journey.
        </p>
        <p className="text-gray-300">
          The Career Roadmap Generator is more than just a tool - it's your personal career compass in the digital age. Start exploring now and chart your course to success in the world of technology!
        </p>
      </div>
    </motion.div>
  )
}