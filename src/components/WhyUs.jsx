import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WhyUs.css'
import WhyImage from '../assets/Anh3.jpg'

gsap.registerPlugin(ScrollTrigger)

const WhyUs = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  const reasons = [
    { icon: '⚡', title: 'Có mặt trong 30 phút', desc: 'Di chuyển nhanh chóng đến tận nhà' },
    { icon: '👨‍🔧', title: 'KTV giàu kinh nghiệm', desc: '10+ năm kinh nghiệm chuyên sâu' },
    { icon: '💰', title: 'Báo giá trước khi sửa', desc: 'Minh bạch chi phí, không phát sinh' },
    { icon: '🛡️', title: 'Bảo hành 3-6 tháng', desc: 'Cam kết bảo hành dài hạn' }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%'
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="why-us" className="why-us">
      <div className="container">
        <div className="why-content">
          <div ref={contentRef} className="why-text">
            <h2 className="section-title">
              Tại Sao Chọn <span className="gradient-text">Chúng Tôi</span>
            </h2>
            <p className="section-subtitle">
              Cam kết chất lượng dịch vụ hoàn hảo
            </p>
            <div className="reasons">
              {reasons.map((reason, index) => (
                <div key={index} className="reason-item">
                  <div className="reason-icon">{reason.icon}</div>
                  <div>
                    <h4>{reason.title}</h4>
                    <p>{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div ref={imageRef} className="why-image">
            <img src={WhyImage} alt="Why choose us" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
