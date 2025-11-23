import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Gallery.css'
import Img1 from '../assets/Anh4.jpg'
import Img2 from '../assets/Anh24.jpg'
import Img3 from '../assets/Anh2.jpg'
import Img4 from '../assets/Anh3.jpg'
import Img5 from '../assets/Anh19.jpg'
import Img6 from '../assets/Anh5.jpg'
import Img7 from '../assets/Anh13.jpg'
import Img8 from '../assets/Anh18.jpg'
import Img9 from '../assets/Anh9.jpg'
import Img10 from '../assets/Anh10.jpg'
import Img11 from '../assets/Anh7.jpg'
import Img12 from '../assets/Anh12.jpg'

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  const images = [
    { src: Img1, title: 'Sửa Tivi Chuyên Nghiệp' },
    { src: Img2, title: 'Thay Màn Hình LED' },
    { src: Img3, title: 'Kỹ Thuật Viên Tận Tâm' },
    { src: Img4, title: 'Kiểm Tra Chất Lượng' },
    { src: Img5, title: 'Thay Đèn LED' },
    { src: Img6, title: 'Dịch Vụ Tận Nhà' },
    { src: Img7, title: 'Linh Kiện Chính Hãng' },
    { src: Img8, title: 'Kiểm tra sửa chữa tại nhà' },
    { src: Img9, title: 'Sửa Smart TV' },
    { src: Img10, title: 'Thay Bo Mạch' },
    { src: Img11, title: 'Khắc Phục Lỗi' },
    { src: Img12, title: 'Bảo Hành Uy Tín' }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-header', {
        scrollTrigger: {
          trigger: '.gallery-header',
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      })

      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 90%'
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.05,
          ease: 'back.out(1.7)'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">
            Thư Viện <span className="gradient-text">Hình Ảnh</span>
          </h2>
          <p className="section-subtitle">
            Hình ảnh thực tế các dự án sửa chữa tivi của chúng tôi
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="gallery-item"
            >
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay">
                <h4>{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
