import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { careerData } from '../data/careerData'
import { CheckCircle, Circle } from 'lucide-react'
import { Progress } from "../components/ui/progress"

export default function Roadmap() {
  const { domain } = useParams()
  const [completedSkills, setCompletedSkills] = useState(new Set())

  const skills = careerData[domain] || []

  const toggleSkill = (skillName) => {
    setCompletedSkills((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(skillName)) {
        newSet.delete(skillName)
      } else {
        newSet.add(skillName)
      }
      return newSet
    })
  }

  const calculateProgress = (level) => {
    const levelSkills = skills.filter((skill) => skill.level === level)
    const completedLevelSkills = levelSkills.filter((skill) => completedSkills.has(skill.name))
    return (completedLevelSkills.length / levelSkills.length) * 100
  }

  return (
    <div className="mt-12">
      <Link to="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">&larr; Back to Career Paths</Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">{domain} Roadmap</h2>
        <div className="space-y-12">
          {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <div key={level} className="glass-effect p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">{level}</h3>
              <Progress value={calculateProgress(level)} className="mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.level === level)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="glass-effect p-4 hover:bg-opacity-20 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                        <button
                          onClick={() => toggleSkill(skill.name)}
                          className="text-purple-400 hover:text-purple-300 focus:outline-none"
                
                        >
                          {completedSkills.has(skill.name) ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            <Circle className="h-6 w-6" />
                          )}
                        </button>
                      </div>
                      <ul className="space-y-1">
                        {skill.resources.map((resource, index) => (
                          <li key={index}>
                            <a
                              href={resource}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-purple-400 hover:text-purple-300 hover:underline"
                            >
                              Resource {index + 1}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}