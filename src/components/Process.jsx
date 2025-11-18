import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Process.css'

gsap.registerPlugin(ScrollTrigger)

const Process = () => {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])

  const steps = [
    {
      number: '01',
      icon: '📞',
      title: 'Liên Hệ & Tư Vấn',
      desc: 'Gọi hotline hoặc nhắn tin, chúng tôi tư vấn miễn phí và báo giá sơ bộ'
    },
    {
      number: '02',
      icon: '🏠',
      title: 'Đến Tận Nhà Kiểm Tra',
      desc: 'KTV có mặt trong 30 phút, kiểm tra tình trạng và báo giá chính xác'
    },
    {
      number: '03',
      icon: '🔧',
      title: 'Sửa Chữa Chuyên Nghiệp',
      desc: 'Tiến hành sửa chữa ngay tại nhà với dụng cụ và linh kiện chính hãng'
    },
    {
      number: '04',
      icon: '✅',
      title: 'Kiểm Tra & Bảo Hành',
      desc: 'Kiểm tra kỹ chất lượng, cấp phiếu bảo hành 3-6 tháng cho khách hàng'
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-header', {
        scrollTrigger: {
          trigger: '.process-header',
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      })

      stepsRef.current.forEach((step, index) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 85%'
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out'
        })

        gsap.from(step.querySelector('.step-number'), {
          scrollTrigger: {
            trigger: step,
            start: 'top 85%'
          },
          scale: 0,
          rotation: 360,
          duration: 0.8,
          delay: index * 0.15 + 0.3,
          ease: 'back.out(2)'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="process">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">
            Quy Trình <span className="gradient-text">Làm Việc</span>
          </h2>
          <p className="section-subtitle">
            4 bước đơn giản để tivi của bạn hoạt động trở lại
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => stepsRef.current[index] = el}
              className="process-step"
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
