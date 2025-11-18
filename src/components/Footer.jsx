import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>SỬA TIVI TẠI NHÀ CẦN THƠ</h3>
            <p>Dịch vụ sửa tivi uy tín #1 tại Cần Thơ với hơn 10 năm kinh nghiệm</p>
          </div>
          <div className="footer-col">
            <h4>Dịch Vụ</h4>
            <ul>
              <li><a href="#services">Sửa Tivi LED/Smart TV/ QLED 2K/4K...</a></li>
              <li><a href="#services">Thay Màn Hình</a></li>
              <li><a href="#services">Khắc Phục Lỗi</a></li>
              <li><a href="#services">Vệ Sinh Bảo Trì</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Liên Hệ</h4>
            <ul>
              <li>📞 0899.997.724</li>
              <li>📍 22 Nguyễn Đệ, Bình Thuỷ, Cần Thơ</li>
              <li>⏰ 24/7 - Cả tuần</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Theo Dõi Chúng Tôi</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61581594614760" target="_blank" rel="noopener noreferrer" className="social-icon facebook" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://zalo.me/0899997724" target="_blank" rel="noopener noreferrer" className="social-icon zalo" title="Zalo">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm.5 14.969l-3.076-3.274-6.004 3.274L9.5 8.363l3.151 3.274 5.929-3.274-6.08 6.606z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@suativitainhacantho?fbclid=IwY2xjawOGxelleHRuA2FlbQIxMABicmlkETFnQWY1d3BUVUVNSGkzTExtc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MghjYWxsc2l0ZQEyAAEe8k24Gff6imoGpWrJPjjmrcbeMDsdKwl94VJiizbAplbKP2PVeaJyfMI3Xlc_aem_jBQQ-BnNDPvQaAiurjfs0A" target="_blank" rel="noopener noreferrer" className="social-icon tiktok" title="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="tel:0899997724" className="social-icon phone" title="Hotline">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Sửa Tivi Tại Nhà Cần Thơ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
