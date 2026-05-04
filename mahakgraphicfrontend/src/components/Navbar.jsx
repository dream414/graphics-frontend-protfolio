import { useState } from 'react'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="bg-gradient-to-r from-sky-950 via-sky-900 to-sky-800 sticky top-0 z-50 border-b border-sky-500/30 shadow-lg shadow-sky-500/20 backdrop-blur-md">

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide  transition hover:scale-105 cursor-pointer">
          <span className="text-cyan-400">MD 💎</span>
          <span className="text-white"> Designer</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-sky-100 items-center">
          <li><a href="#home" className="hover:text-cyan-300">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-300">About</a></li>
          <li><a href="#services" className="hover:text-cyan-300">Service</a></li>
          <li><a href="#portfolio" className="hover:text-cyan-300">Portfolio</a></li>
          <li><a href="#templates" className="hover:text-cyan-300">Templates</a></li>
          <li><a href="#test" className="hover:text-cyan-300">Testimonials</a></li>
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
<button className="bg-sky-500 hover:bg-sky-400 px-6 py-2 rounded-xl text-white font-semibold transition hover:scale-105 cursor-pointer">
            <a href="#contact"> Hire Me</a>
          </button>

        </div>

        {/* Mobile Burger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl cursor-pointer"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden text-center bg-sky-950 border-t border-sky-500/20 px-6 py-6 space-y-5 text-sky-100">

          <a href="#home" onClick={closeMenu} className="block hover:text-cyan-300">Home</a>
          <a href="#about" onClick={closeMenu} className="block hover:text-cyan-300">About</a>
          <a href="#services" onClick={closeMenu} className="block hover:text-cyan-300">Portfolio</a>
          <a href="#templates" onClick={closeMenu} className="block hover:text-cyan-300">Templates</a>
          <a href="#test" onClick={closeMenu} className="block hover:text-cyan-300">Testimonials</a>
          

          <button onClick={closeMenu} className="bg-sky-300 hover:bg-sky-500 w-full py-3 rounded-xl transition hover:scale-105 text-white font-semibold mt-4 cursor-pointer">
            <a href="#contact"> Hire Me</a>
          </button>

        </div>
      )}

    </nav>
  )
}

export default Navbar