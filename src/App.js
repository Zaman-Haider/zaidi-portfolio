import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import Hero from './components/Hero'
// import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import Footer from './components/Footer'

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark'
    } catch (e) {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle dark / light mode"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="btn btn-circle fixed top-4 right-4 z-50 shadow-lg"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  )
}

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <ThemeToggle />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}
