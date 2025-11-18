import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Pricing.css'

gsap.registerPlugin(ScrollTrigger)

const Pricing = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const plans = [
    {
      name: 'Kiểm tra & Tư vấn',
      price: 'MIỄN PHÍ',
      features: [
        'Kiểm tra tình trạng tivi',
        'Tư vấn giải pháp sửa chữa',
        'Báo giá chi tiết',
        'Không thu phí nếu không sửa'
      ]
    },
    {
      name: 'Sửa Chữa Cơ Bản',
      price: '300k',
      popular: true,
      features: [
        'Sửa lỗi không lên nguồn',
        'Vệ sinh bảo dưỡng',
        'Thay linh kiện nhỏ',
        'Bảo hành 3 tháng'
      ]
    },
    {
      name: 'Thay Linh Kiện Lớn',
      price: 'Từ 800k',
      features: [
        'Thay màn hình',
        'Thay đèn LED backlight',
        'Thay bo mạch chính',
        'Bảo hành 6 tháng'
      ]
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-header', {
        scrollTrigger: {
          trigger: '.pricing-header',
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
          delay: index * 0.2,
          ease: 'power3.out'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">
            Bảng Giá <span className="gradient-text">Dịch Vụ</span>
          </h2>
          <p className="section-subtitle">
            Giá cả minh bạch, phù hợp với mọi nhu cầu
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="badge">Phổ biến</div>}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <a href="#booking" className="btn btn-primary">
                Đặt lịch ngay
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
