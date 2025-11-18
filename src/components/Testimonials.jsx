import { useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Testimonials.css'
import Customer1 from '../assets/Anh20.png'
import Customer2 from '../assets/Anh22.png'
import Customer3 from '../assets/Anh21.png'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Anh Minh Tuấn',
      location: 'Ninh Kiều, Cần Thơ',
      image: Customer1,
      text: 'Dịch vụ rất tốt, kỹ thuật viên đến nhanh và sửa chữa chuyên nghiệp. Tivi nhà tôi bị mất hình đã được khắc phục hoàn toàn. Giá cả hợp lý, tôi rất hài lòng!',
      rating: 5
    },
    {
      name: 'Chị Thanh Hương',
      location: 'Cái Răng, Cần Thơ',
      image: Customer2,
      text: 'Thay màn hình tivi Samsung 55 inch rất nhanh gọn, chỉ mất 1 tiếng là xong. Anh kỹ thuật tư vấn nhiệt tình, giải thích rõ ràng. Giá cả minh bạch, không phát sinh.',
      rating: 5
    },
    {
      name: 'Anh Văn Hải',
      location: 'Ô Môn, Cần Thơ',
      image: Customer3,
      text: 'Tivi LG nhà tôi không lên nguồn, gọi hotline được hỗ trợ tư vấn nhiệt tình. Kỹ thuật viên đến kiểm tra và sửa ngay trong ngày. Bảo hành 6 tháng rất yên tâm!',
      rating: 5
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-header', {
        scrollTrigger: {
          trigger: '.testimonials-header',
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      })

      gsap.from('.testimonial-slider', {
        scrollTrigger: {
          trigger: '.testimonial-slider',
          start: 'top 85%'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">
            Khách Hàng <span className="gradient-text">Nói Gì</span>
          </h2>
          <p className="section-subtitle" >
            Hơn 3000+ khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng<br />tôi
          </p>
        </div>

        <div className="testimonial-slider">
          <button className="nav-btn prev" onClick={prevTestimonial}>
            ❮
          </button>

          <div className="testimonial-card">
            <img 
              src={testimonials[activeIndex].image} 
              alt={testimonials[activeIndex].name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <div className="stars">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
              <h4 className="testimonial-name">{testimonials[activeIndex].name}</h4>
              <p className="testimonial-location">📍 {testimonials[activeIndex].location}</p>
            </div>
          </div>

          <button className="nav-btn next" onClick={nextTestimonial}>
            ❯
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
