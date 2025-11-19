import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Services.css'
import Img1 from '../assets/Anh16.jpg'
import Img2 from '../assets/Anh15.jpg'
import Img3 from '../assets/Anh7.jpg'
import Img4 from '../assets/Anh5.jpg'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const services = [
    {
      image: Img1,
      title: 'Sửa Tivi LED/Smart TV/ QLED 2K/4K...',
      desc: 'Sửa chữa tất cả các hãng Samsung, LG, Sony, TCL..... với đội ngũ kỹ thuật chuyên nghiệp',
      features: ['Tất cả hãng', 'Linh kiện chính hãng', 'Bảo hành 3-6 tháng']
    },
    {
      image: Img2,
      title: 'Thay Đèn - Màn Hình',
      desc: 'Chuyên thay đèn nền LED, màn hình tivi với giá cạnh tranh, thời gian nhanh chóng',
      features: ['Đèn LED chất lượng', 'Đèn màn hình zin', 'Giá rõ ràng', 'Thay màn hình']
    },
    {
      image: Img3,
      title: 'Khắc Phục Lỗi Tivi',
      desc: 'Sửa lỗi mất hình, mất tiếng, không nhận Wi-Fi, không bật nguồn...',
      features: ['Chẩn đoán miễn phí', 'Sửa tận nhà', 'Báo giá trước']
    },
    {
      image: Img4,
      title: 'Chính sách bảo hành & bảo dưỡng',
      desc: 'Vệ sinh bảo dưỡng định kỳ, cập nhật phần mềm, tối ưu hiệu suất',
      features: ['Vệ sinh chuyên sâu', 'Cập nhật firmware', 'Tư vấn miễn phí']
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-header', {
        scrollTrigger: {
          trigger: '.services-header',
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
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out'
        })

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">
            Dịch Vụ <span className="gradient-text">Toàn Diện</span>
          </h2>
          <p className="section-subtitle">
            Đơn vị cung cấp dịch vụ sửa chữa tivi chuyên nghiệp cho quý khách hàng với mức giá hợp lí
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="service-card"
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
