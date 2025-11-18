import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const contactInfo = [
    {
      icon: '📞',
      title: 'Hotline 24/7',
      info: '0899.997.724',
      desc: 'Luôn sẵn sàng hỗ trợ bạn mọi lúc'
    },
    {
      icon: '📍',
      title: 'Địa Chỉ',
      info: '22 Nguyễn Đệ, Bình Thuỷ, Cần Thơ',
      desc: 'Phục vụ toàn bộ khu vực TP. Cần Thơ'
    },
    {
      icon: '⏰',
      title: 'Giờ Làm Việc',
      info: '8:00 - 22:00',
      desc: 'Hằng ngày từ thứ 2 đến chủ nhật'
    },
    {
      icon: '💬',
      title: 'Zalo/Messenger',
      info: '0899.997.724',
      desc: 'Nhắn tin ngay để được tư vấn'
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        scrollTrigger: {
          trigger: '.contact-header',
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      })

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.5)'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="lien-he" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">
            Liên Hệ <span className="gradient-text">Ngay</span>
          </h2>
          <p className="section-subtitle">
            Chúng tôi luôn sẵn sàng phục vụ bạn
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="contact-card"
            >
              <div className="contact-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="contact-info">{item.info}</p>
              <p className="contact-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="contact-cta">
          <a href="tel:0899997724" className="btn-primary">
            Gọi Ngay: 0899.997.724
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
