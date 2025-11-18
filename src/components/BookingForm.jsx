import { useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './BookingForm.css'

gsap.registerPlugin(ScrollTrigger)

const BookingForm = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      const inputs = formRef.current.querySelectorAll('input, textarea, select')
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          gsap.to(input, {
            scale: 1.02,
            boxShadow: '0 0 0 3px rgba(46, 204, 113, 0.2)',
            duration: 0.3
          })
        })

        input.addEventListener('blur', () => {
          gsap.to(input, {
            scale: 1,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            duration: 0.3
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ trong vòng 5 phút.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section ref={sectionRef} id="booking" className="booking">
      <div className="container">
        <div className="booking-content">
          <div className="booking-info">
            <h2 className="section-title">
              Đặt Lịch <span className="gradient-text">Ngay Hôm Nay</span>
            </h2>
            <p className="section-subtitle">
              Điền thông tin để được hỗ trợ nhanh chóng
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <strong>Hotline</strong>
                  <p>0979.123.456</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Địa chỉ</strong>
                  <p>Ninh Kiều, Cần Thơ</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">⏰</span>
                <div>
                  <strong>Giờ làm việc</strong>
                  <p>24/7 - Cả tuần</p>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="booking-form">
            <input
              type="text"
              name="name"
              placeholder="Họ và tên *"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại *"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ *"
              required
              value={formData.address}
              onChange={handleChange}
            />
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Chọn dịch vụ *</option>
              <option value="sua-chua">Sửa chữa tivi</option>
              <option value="thay-man-hinh">Thay màn hình</option>
              <option value="thay-den">Thay đèn LED</option>
              <option value="ve-sinh">Vệ sinh bảo trì</option>
            </select>
            <textarea
              name="message"
              placeholder="Mô tả vấn đề (không bắt buộc)"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn btn-primary">
              📅 Đặt lịch ngay
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookingForm
