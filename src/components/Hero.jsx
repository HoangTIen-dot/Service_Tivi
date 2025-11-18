import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import './Hero.css'
import HeroImage from '../assets/Anh4.jpg'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8
      }, '-=0.5')
      .from(ctaRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6
      }, '-=0.3')
      .from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1
      }, '-=0.8')

      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 ref={titleRef} className="hero-title">
              Dịch Vụ Sửa Tivi<br />
              Nhanh Tại Nhà<br />
              <span className="gradient-text">Cần Thơ</span>
            </h1>
            <p ref={subtitleRef} className="hero-subtitle">
              Có mặt trong 30 phút • Bảo hành chuyên sâu<br />
              Kỹ thuật viên chuyên nghiệp • Giá rõ ràng
            </p>
            <div ref={ctaRef} className="hero-cta">
              <a href="#booking" className="btn btn-primary">
                📞 Gọi ngay 0899.997.724
              </a>
            </div>
          </div>
          <div ref={imageRef} className="hero-image">
            <img src={HeroImage} alt="Sửa tivi" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
