import React, { useState } from "react"
import { ShoppingCart, User, Menu, X, Search } from "lucide-react"
import "./style.css"
import { NavLink } from "react-router"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='navbar'>
      <NavLink to='/' className='navbar-logo'>
        Tokopaedi
      </NavLink>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to='/'>Beranda</NavLink>
        </li>
        <li>
          <a href='/add-product'>Tambah Produk</a>
        </li>
        <li>
          <a href='#categories'>Kategori</a>
        </li>
      </ul>

      <div className='nav-actions'>
        <div className='search-box'>
          <Search size={18} color='#666' />
          <input type='text' placeholder='Cari produk...' />
        </div>

        <button className='icon-btn'>
          <ShoppingCart size={24} />
          <span className='cart-badge'>3</span>
        </button>

        <button className='icon-btn'>
          <User size={24} />
        </button>

        <button className='menu-toggle' onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
