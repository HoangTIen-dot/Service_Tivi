import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ServiceDetails.css'

gsap.registerPlugin(ScrollTrigger)

const ServiceDetails = () => {
  const sectionRef = useRef(null)
  const blocksRef = useRef([])

  const serviceInfo = [
    {
      title: 'Dịch vụ sửa chữa tivi tại nhà các bệnh như',
      items: [
        'Bật tivi nhưng không lên hình gì',
        'Mở tivi được 5 – 10 phút mới chạy. Hoặc tivi chạy một lúc tự tắt',
        'Tivi samsung không có đèn báo nguồn',
        'Hiện tượng máy chạy 2 – 5s tự tắt',
        'Màn hình tivi thấy ảnh tối',
        'Bật máy lên thấy màu đỏ gạch một lúc mới sáng',
        'Màn hình chỉ sáng nửa trên hoặc nửa dưới',
        'Không nhận đồ phân giải ban đầu từ nhà sản xuất',
        'Mất các chức năng ở menu điều khiển ở màn hình',
        'Màn hình tivi bị sai chế độ màu',
        'Đèn báo nguồn luôn ở trạng thái màu vàng',
        'Tivi nhận remote không nhận'
      ]
    },
    {
      title: 'Sửa bệnh panel màn hình cho tivi',
      items: [
        'Hiện tượng trắng màn hình tivi',
        'Ảnh thấy mờ xương hay ám ảnh',
        'Kẻ xọc ngang xọc dọc hay bị bóng chữ',
        'Ảnh bị sai màu các nét chữ bị xệ gãy khó xem',
        'Mất 1/3 hay 2/3 màn hình không hiển thị được'
      ]
    },
    {
      title: 'Quy trình sửa tivi tại nhà',
      items: [
        'Khi nhận được yêu cầu sửa TV tại nhà của quý khách. Chúng tôi sẽ cử nhân viên kỹ thuật đến kiểm tra tivi nhà bạn',
        'Kỹ thuật viên báo giá chi phí sửa tivi tại nhà',
        'Khách hàng thống nhất và đồng ý sử dụng dịch vụ sửa chữa TV',
        'Kỹ thuật tiến hành sửa tivi tại nhà và vệ sinh tivi nếu cần',
        'Bảo hành và hỗ trợ khách hàng sau khi sử dụng dịch vụ sửa chữa tivi tại nhà'
      ]
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-details-header', {
        scrollTrigger: {
          trigger: '.service-details-header',
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      })

      blocksRef.current.forEach((block, index) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: 'top 85%'
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="service-details">
      <div className="container">
        <div className="service-details-header">
          <h2 className="section-title">
            Một Số <span className="gradient-text">Dịch Vụ</span>
          </h2>
          <p className="section-subtitle">
            Chuyên sửa chữa mọi lỗi tivi tại nhà với đội ngũ kỹ thuật chuyên nghiệp
          </p>
        </div>

        <div className="service-info-grid">
          {serviceInfo.map((info, idx) => (
            <div 
              key={idx} 
              ref={el => blocksRef.current[idx] = el}
              className="info-block"
            >
              <h3 className="info-title">{info.title}</h3>
              <ul className="info-list">
                {info.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails
