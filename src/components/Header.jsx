import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import './Header.css'
import Logo from '../assets/LOGO.png'

const Header = () => {
  const headerRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <header ref={headerRef} className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={Logo} alt="Logo" className="logo-icon" />
            
          </div>
          <nav className="nav">
            <a href="#services">Dịch vụ</a>
            <a href="#why-us">Ưu điểm</a>
            <a href="#gallery">Hình ảnh</a>
            <a href="#contact">Liên hệ</a>
          </nav>
          <a href="tel:0899997724" className="btn btn-primary">
            📞 0899.997.724
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
