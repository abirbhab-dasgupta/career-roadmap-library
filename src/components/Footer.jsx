import React from 'react'
import { Instagram, Twitter, Github, Mail, Linkedin } from 'lucide-react'
import { Button } from "../components/ui/button"

export default function Footer() {
  const socialLinks = {
    instagram: 'https://www.instagram.com/abirbhab_',
    twitter: 'https://twitter.com/Abirbhab_24',
    github: 'https://github.com/abirbhab-dasgupta',
    email: 'mailto:abirbhab00dasgupta@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abirbhab'
  }

  return (
    <footer className="bg-gradient-to-r from-[#1a1a2e] to-[#0f3460] py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; 2024 Career Roadmap Library. Made by Abirbhab Dasgupta</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={socialLinks.email}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}