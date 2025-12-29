import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge,  } from 'react-bootstrap';

// Hover efekti için CSS
const hoverCardStyle = `
  .hover-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .hover-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
  }

  /* Piramit Logo CSS */
  .pyramid-loader {
    position: relative;
    width: 50px;
    height: 50px;
    display: inline-block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
    margin-right: 10px;
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }

  .pyramid-loader .wrapper .side {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  .pyramid-loader .wrapper .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: linear-gradient(to bottom right, #1afbf0, #da00ff);
  }

  .pyramid-loader .wrapper .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: linear-gradient(to bottom right, #1afbf0, #da00ff);
  }

  .pyramid-loader .wrapper .side3 {
    transform: rotateX(30deg);
    background: linear-gradient(to bottom right, #1afbf0, #da00ff);
  }

  .pyramid-loader .wrapper .side4 {
    transform: rotateX(-30deg);
    background: linear-gradient(to bottom right, #1afbf0, #da00ff);
  }

  .pyramid-loader .wrapper .shadow {
    width: 25px;
    height: 25px;
    background: #8b5ad5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-20px);
    filter: blur(12px);
  }

  .brand-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .brand-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
`;

function HomePage() {
  useEffect(() => {
    // Testimonial slider functionality
    const sliderTrack = document.querySelector('.slider-track') as HTMLElement;
    const items = document.querySelectorAll('.testimonial-item') as NodeListOf<HTMLElement>;
    const prevBtn = document.querySelector('.control-prev') as HTMLButtonElement;
    const nextBtn = document.querySelector('.control-next') as HTMLButtonElement;
    
    if (sliderTrack && items.length > 0 && prevBtn && nextBtn) {
      let currentIndex = 0;
      
      function updateSlider() {
        // Get current dimensions
        const containerWidth = (sliderTrack.parentElement as HTMLElement).offsetWidth;
        const itemWidth = Math.min(450, containerWidth - 40); // Maximum width of 450px
        
        // Set proper width for all items
        items.forEach(item => {
          item.style.minWidth = `${itemWidth}px`;
        });
        
        // Calculate exact offset including gaps
        const gap = 30;
        const offset = -(currentIndex * (itemWidth + gap));
        
        // Apply transformation
        sliderTrack.style.transform = `translateX(${offset}px)`;
        
        // Update active state
        items.forEach((item, index) => {
          if (index === currentIndex) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
      
      function showNext() {
        currentIndex = (currentIndex + 1) % items.length;
        updateSlider();
      }
      
      function showPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateSlider();
      }
      
      prevBtn.addEventListener('click', showPrev);
      nextBtn.addEventListener('click', showNext);
      
      // Handle window resize
      const handleResize = () => {
        updateSlider();
      };
      window.addEventListener('resize', handleResize);
      
      // Auto slide
      const interval = setInterval(showNext, 5000);
      
      // Initial update
      updateSlider();
      
      // Cleanup
      return () => {
        clearInterval(interval);
        prevBtn.removeEventListener('click', showPrev);
        nextBtn.removeEventListener('click', showNext);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <>
      <style>{hoverCardStyle}</style>
      <div className="bg-light min-vh-100">
        {/* Hero Section */}
        <div className="py-5 mb-5" style={{ 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        }}>
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0">
                <h1 className="display-4 fw-bold mb-3" style={{ color: '#212529' }}>Serenità'ya Hoş Geldiniz</h1>
                <p className="lead mb-4" style={{ color: '#495057' }}>Kişisel gelişim ve büyüme yolculuğunuz burada başlıyor. Hedefler belirleyin, ilerlemenizi takip edin ve benzer düşünen kişilerle bağlantı kurun.</p>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="me-3" 
                  style={{ 
                    backgroundColor: '#2F2585',
                    borderColor: '#2F2585',
                    borderRadius: '8px',
                    padding: '12px 30px',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px rgba(47, 37, 133, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a1a4a';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 12px rgba(47, 37, 133, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#2F2585';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(47, 37, 133, 0.1)';
                  }}
                >
                  Başla
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  style={{ 
                    borderColor: '#2F2585',
                    color: '#2F2585',
                    borderRadius: '8px',
                    padding: '12px 30px',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'transparent'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(47, 37, 133, 0.05)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Daha Fazla
                </Button>
              </Col>
              <Col md={6}>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="İşbirliği yapan insanlar" 
                  className="img-fluid rounded shadow-lg" 
                />
              </Col>
            </Row>
          </Container>
        </div>

        {/* Features Section */}
        <Container className="mb-5">
          <h2 className="text-center mb-5 fw-bold">Neden Serenità?</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-card">
                <Card.Body className="text-center p-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-bullseye fs-1 text-primary"></i>
                  </div>
                  <Card.Title className="fw-bold mb-3">Kişisel Hedefler Belirleyin</Card.Title>
                  <Card.Text>Kişisel gelişim hedeflerinizi oluşturun ve paylaşın. İlerlemenizi takip edin ve topluluğumuzla başarılarınızı kutlayın.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-card">
                <Card.Body className="text-center p-4">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-trophy fs-1 text-success"></i>
                  </div>
                  <Card.Title className="fw-bold mb-3">Rozetler ve Ödüller Kazanın</Card.Title>
                  <Card.Text>Başarılarınız için rozetlerle tanınma kazanın. Puanlar toplayın ve özel çekilişlere ve ödüllere katılın.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-card">
                <Card.Body className="text-center p-4">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-people fs-1 text-info"></i>
                  </div>
                  <Card.Title className="fw-bold mb-3">Bağlantı Kurun ve Paylaşın</Card.Title>
                  <Card.Text>Günlük gönderiler, fotoğraflar ve düşünceler paylaşın. Başkalarından ilham alın ve yolculuğunuz hakkında geri bildirim alın/verin.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Daily Blog Section */}
        <div className="bg-light py-5 mb-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <h2 className="fw-bold mb-3">Günün İçgörüsü: Günlük Hayatta Farkındalık</h2>
                <p className="text-muted">Yayınlanma: 10 Nisan 2025</p>
                <p>Farkındalık, şu anda tamamen mevcut ve meşgul olma, düşüncelerinizi ve duygularınızı dikkat dağıtıcı veya yargılayıcı olmadan fark etme pratiğidir. Günümüzün hızlı tempolu dünyasında, farkındalık uygulaması stresi azaltmaya, odaklanmayı geliştirmeye ve genel refahı artırmaya yardımcı olabilir.</p>
                <p>Bugün, farkındalığı günlük rutininize dahil etmenin üç basit yolunu keşfediyoruz...</p>
                <Button variant="primary">Tam Makaleyi Oku</Button>
              </Col>
              <Col lg={6}>
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Meditasyon yapan kişi" 
                  className="img-fluid rounded shadow-lg" 
                />
              </Col>
            </Row>
          </Container>
        </div>

        {/* Community Highlights */}
        <Container className="mb-5">
          <h2 className="text-center mb-5 fw-bold">Topluluk Öne Çıkanları</h2>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-white border-0 pt-4 pb-0">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle overflow-hidden me-3" style={{ width: '50px', height: '50px' }}>
                      <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Kullanıcı" className="img-fluid" />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Ayşe Yılmaz</h6>
                      <small className="text-muted">2 saat önce</small>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="mb-3" style={{ height: '100px' }}>Sonunda 30 günlük yoga meydan okumamı tamamladım! İnanılmaz bir yolculuk oldu ve hem fiziksel hem de zihinsel olarak çok daha güçlü hissediyorum. Beni destekleyen herkese teşekkürler! 🧘‍♀️✨</p>
                  <div className="mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Yoga yapan kadın" 
                      className="img-fluid rounded mb-3" 
                      style={{ width: '100%', height: '200px', objectFit: 'cover', paddingBottom: '10px' }}
                    />
                    <Badge bg="primary" className="me-1">Yoga</Badge>
                    <Badge bg="success" className="me-1">30GünMeydanOkuma</Badge>
                    <Badge bg="info">Sağlık</Badge>
                  </div>
                  <div className="d-flex">
                    <Button variant="outline-primary" size="sm" className="me-2">
                      <i className="bi bi-heart me-1"></i> 42 Beğeni
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      <i className="bi bi-chat me-1"></i> 12 Yorum
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-white border-0 pt-4 pb-0">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle overflow-hidden me-3" style={{ width: '50px', height: '50px' }}>
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Kullanıcı" className="img-fluid" />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Mehmet Kaya</h6>
                      <small className="text-muted">Dün</small>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="mb-3" style={{ height: '100px' }}>Bu yıl 25 kitap okuma hedefime ulaştım! 📚 Favorim James Clear'ın "Atomic Habits" kitabıydı. Son zamanlarda sizi hangi kitaplar etkiledi?</p>
                  <div className="mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                      alt="Rafta kitaplar" 
                      className="img-fluid rounded mb-3" 
                      style={{ width: '100%', height: '200px', objectFit: 'cover', paddingBottom: '10px' }}
                    />
                    <Badge bg="warning" className="me-1">Okuma</Badge>
                    <Badge bg="success" className="me-1">HedefBaşarıldı</Badge>
                  </div>
                  <div className="d-flex">
                    <Button variant="outline-primary" size="sm" className="me-2">
                      <i className="bi bi-heart me-1"></i> 56 Beğeni
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      <i className="bi bi-chat me-1"></i> 23 Yorum
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mx-auto">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-white border-0 pt-4 pb-0">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle overflow-hidden me-3" style={{ width: '50px', height: '50px' }}>
                      <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Kullanıcı" className="img-fluid" />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Zeynep Demir</h6>
                      <small className="text-muted">3 gün önce</small>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="mb-3" style={{ height: '100px' }}>60 gün boyunca günlük meditasyon pratiğimi sürdürdükten sonra "Tutarlılık Şampiyonu" rozetini kazandığımı duyurmaktan heyecan duyuyorum! Kazandığım zihinsel netlik dönüştürücü oldu. 🧠✨</p>
                  <div className="mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Meditasyon yapan kadın" 
                      className="img-fluid rounded mb-3" 
                      style={{ width: '100%', height: '200px', objectFit: 'cover', paddingBottom: '10px' }}
                    />
                    <div className="bg-light p-3 rounded mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning text-white rounded-circle p-2 me-3">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">Tutarlılık Şampiyonu Rozeti</h6>
                          <small className="text-muted">60 günlük meditasyon serisi için verildi</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <Button variant="outline-primary" size="sm" className="me-2">
                      <i className="bi bi-heart me-1"></i> 78 Beğeni
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      <i className="bi bi-chat me-1"></i> 34 Yorum
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="outline-primary">Daha Fazla Topluluk Gönderisi Gör</Button>
          </div>
        </Container>

        {/* Testimonials Slider Section */}
        <div className="py-5 mb-5 bg-light">
          <Container>
            <h2 className="text-center mb-5 fw-bold">Serenità'da Neler Oluyor..</h2>
            <div
              className="slider"
              style={{
                "--width": "300px",
                "--height": "220px",
                "--quantity": "8"
              } as React.CSSProperties}
            >
              <div className="list">
                <div className="item" style={{ "--position": "1" } as React.CSSProperties}>
                  <div
                    className="card"
                    style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b)" }}
                  >
                    <h5 className="fw-bold mb-1">Ayşe Yılmaz</h5>
                    <p className="text-muted small mb-2">İstanbul</p>
                    <div className="rating mb-2">
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                    </div>
                    <p>"Serenità, kendime yaptığım en iyi yatırım oldu. Düzenli meditasyon pratiği sayesinde mental sağlığımı güçlendirdim."</p>
                  </div>
                </div>
                <div className="item" style={{ "--position": "2" } as React.CSSProperties}>
                  <div
                    className="card"
                    style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)" }}
                  >
                    <h5 className="fw-bold mb-1">Mehmet Kaya</h5>
                    <p className="text-muted small mb-2">Ankara</p>
                    <div className="rating mb-2">
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-half text-white"></i>
                    </div>
                    <p>"Topluluk yarışmaları motivasyonumu yüksek tutmamda büyük rol oynadı. Serenità ile hayatım değişti!"</p>
                  </div>
                </div>
                <div className="item" style={{ "--position": "3" } as React.CSSProperties}>
                  <div
                    className="card"
                    style={{ background: "linear-gradient(to right, #00c6ff, #0072ff)" }}
                  >
                    <h5 className="fw-bold mb-1">Zeynep Demir</h5>
                    <p className="text-muted small mb-2">İzmir</p>
                    <div className="rating mb-2">
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                    </div>
                    <p>"Okuma alışkanlığı kazanmak için 30 günlük meydan okumaya katıldım ve şimdi her gün düzenli kitap okuyorum."</p>
                  </div>
                </div>
                <div className="item" style={{ "--position": "4" } as React.CSSProperties}>
                  <div
                    className="card"
                    style={{ background: "linear-gradient(to right, #ff512f, #dd2476)" }}
                  >
                    <h5 className="fw-bold mb-1">Ali Yıldız</h5>
                    <p className="text-muted small mb-2">Bursa</p>
                    <div className="rating mb-2">
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                    </div>
                    <p>"Uzmanlarla yapılan görüşmeler hayatımda devrim yarattı. Kaygı sorunlarımla başa çıkmayı öğrendim."</p>
                  </div>
                </div>
                <div className="item" style={{ "--position": "5" } as React.CSSProperties}>
                  <div
                    className="card"
                    style={{ background: "linear-gradient(to right, #ffb6c1, #ff69b4)" }}
                  >
                    <h5 className="fw-bold mb-1">Elif Şahin</h5>
                    <p className="text-muted small mb-2">Antalya</p>
                    <div className="rating mb-2">
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                    </div>
                    <p>"Serenità ile sağlıklı alışkanlıklar edindim ve daha enerjik hissediyorum. İyi ki bu uygulamayı keşfettim!"</p>
                  </div>
                </div>
                <div className="item" style={{ "--position": "6" } as React.CSSProperties}>
                  <div
                    className="card"
                    style={{ background: "linear-gradient(to right, #ff9a8b, #ffc3a0)" }}
                  >
                    <h5 className="fw-bold mb-1">Burak Özdemir</h5>
                    <p className="text-muted small mb-2">Eskişehir</p>
                    <div className="rating mb-2">
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-half text-white"></i>
                    </div>
                    <p>"Topluluk etkinlikleri sayesinde benzer hedefleri olan kişilerle tanıştım ve birbirimizi motive ediyoruz."</p>
                  </div>
                </div>
                <div className="item" style={{ "--position": "7" } as React.CSSProperties}>
                  <div
                    className="card"
                    style={{ background: "linear-gradient(to right, #a1c4fd, #c2e9fb)" }}
                  >
                    <h5 className="fw-bold mb-1">Selin Aydın</h5>
                    <p className="text-muted small mb-2">Samsun</p>
                    <div className="rating mb-2">
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                    </div>
                    <p>"Meditasyon uygulamaları sayesinde kendimi daha iyi tanıdım ve bana iyi gelen şeyleri keşfettim."</p>
                  </div>
                </div>
                <div className="item" style={{ "--position": "8" } as React.CSSProperties}>
                  <div
                    className="card"
                    style={{ background: "linear-gradient(to right, #fbc2eb, #a18cd1)" }}
                  >
                    <h5 className="fw-bold mb-1">Emre Koç</h5>
                    <p className="text-muted small mb-2">Trabzon</p>
                    <div className="rating mb-2">
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                      <i className="bi bi-star-fill text-white"></i>
                    </div>
                    <p>"30 günlük spor meydan okuması sayesinde düzenli egzersiz alışkanlığı edindim. Şimdi her gün daha sağlıklıyım."</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Newsletter Section */}
        <Container className="mb-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <h3 className="fw-bold mb-3">Güncel Kalın</h3>
                  <p className="mb-4">Bültenimize abone olarak günlük ilham, yaklaşan etkinlikler ve özel içerikler alın.</p>
                  <div className="d-flex">
                    <input type="email" className="form-control me-2" placeholder="E-posta adresiniz" />
                    <Button variant="primary">Abone Ol</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Footer */}
        <footer className="bg-dark text-white py-4 mt-5">
          <Container>
            <Row>
              <Col md={4} className="mb-3 mb-md-0">
                <div className="brand-container mb-3">
                  <div className="pyramid-loader">
                    <div className="wrapper">
                      <span className="side side1"></span>
                      <span className="side side2"></span>
                      <span className="side side3"></span>
                      <span className="side side4"></span>
                      <span className="shadow"></span>
                    </div>
                  </div>
                  <h5 className="brand-text mb-0">Serenità</h5>
                </div>
                <p className="mb-0">Kişisel gelişim yolculuğunuz burada başlar. Bağlantı kurun, büyüyün ve hedeflerinize birlikte ulaşın.</p>
              </Col>
              <Col md={4} className="mb-3 mb-md-0">
                <h5 className="fw-bold mb-3">Hızlı Bağlantılar</h5>
                <div className="d-flex flex-column">
                  <a href="#" className="text-white-50 mb-1 text-decoration-none">Hakkımızda</a>
                  <a href="#" className="text-white-50 mb-1 text-decoration-none">Blog</a>
                  <a href="#" className="text-white-50 mb-1 text-decoration-none">İletişim</a>
                  <a href="#" className="text-white-50 mb-1 text-decoration-none">Gizlilik Politikası</a>
                </div>
              </Col>
              <Col md={4}>
                <h5 className="fw-bold mb-3">Bize Ulaşın</h5>
                <p className="mb-2"><i className="bi bi-geo-alt me-2"></i>Bağdat Caddesi No:123, Kadıköy, İstanbul</p>
                <p className="mb-2"><i className="bi bi-telephone me-2"></i>+90 (212) 123 45 67</p>
                <p className="mb-2"><i className="bi bi-envelope me-2"></i>info@serenita.com</p>
                <p className="mb-3"><i className="bi bi-clock me-2"></i>Hafta içi: 09:00 - 18:00</p>
                <div className="d-flex mb-2">
                  <a href="#" className="text-white me-3 fs-5">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-white me-3 fs-5">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="text-white me-3 fs-5">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-white fs-5">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </Col>
            </Row>
            <hr className="my-4" />
            <div className="text-center">
              <p className="mb-0">&copy; 2025 Serenità. Tüm hakları saklıdır.</p>
            </div>
          </Container>
        </footer>
      </div>
      <style>{`
        /* From Uiverse.io by ashwin_5681 */ 
        /* Sadece slider için özel kartlar */
        .slider .card {
          width: 100%;
          height: 100%;
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          color: white;
          text-align: center;
        }

        .slider .card p {
          font-size: 14px;
          color: white;
          margin-bottom: 0;
        }
        
        .slider .card .text-muted {
          color: rgba(255, 255, 255, 0.8) !important;
        }

        .slider {
          width: 100%;
          height: var(--height);
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
        }
        .slider .list {
          display: flex;
          width: 100%;
          min-width: calc(var(--width) * var(--quantity));
          position: relative;
        }
        .slider .list .item {
          width: var(--width);
          height: var(--height);
          position: absolute;
          left: 100%;
          animation: autoRun 20s linear infinite;
          transition: filter 0.5s;
          animation-delay: calc(
            (20s / var(--quantity)) * (var(--position) - 1) - 20s
          ) !important;
        }
        @keyframes autoRun {
          from {
            left: 100%;
          }
          to {
            left: calc(var(--width) * -1);
          }
        }
        .slider:hover .item {
          animation-play-state: paused !important;
          filter: grayscale(1);
        }
        .slider .item:hover {
          filter: grayscale(0);
        }
        .slider[reverse="true"] .item {
          animation: reversePlay 20s linear infinite;
        }
        @keyframes reversePlay {
          from {
            left: calc(var(--width) * -1);
          }
          to {
            left: 100%;
          }
        }

        .rating {
          letter-spacing: 1px;
          display: flex;
          justify-content: center;
          color: white;
          font-size: 0.8rem;
        }

        /* Remove previous testimonial slider styles */
        .testimonial-slider,
        .slider-container,
        .slider-track,
        .testimonial-item,
        .testimonial-avatar,
        .testimonial-controls {
          /* These styles are removed/replaced */
        .testimonial-item.active {
          opacity: 1;
          transform: scale(1);
        }

        .testimonial-item:not(.active) {
          opacity: 0.7;
          transform: scale(0.95);
        }

        .testimonial-item .card {
          width: 100%;
          height: 100%;
          max-width: 300px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .testimonial-item .card-body {
          padding: 1.25rem;
        }

        .testimonial-avatar {
          display: flex;
          justify-content: center;
          margin-bottom: 0.75rem;
        }

        .testimonial-avatar img {
          border: 3px solid #fff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          object-fit: cover;
          width: 60px;
          height: 60px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          z-index: 10;
          position: relative;
        }

        .testimonial-controls button {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #fff;
          border: none;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          margin: 0 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .testimonial-controls button:hover {
          background: #2F2585;
          color: white;
        }

        .testimonial-controls button:focus {
          outline: none;
        }

        .rating {
          letter-spacing: 1px;
          display: flex;
          justify-content: center;
          margin-bottom: 0.75rem;
          color: #ffc107;
          font-size: 0.8rem;
        }

        .testimonial-item h5 {
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }

        .testimonial-item p.text-muted {
          margin-bottom: 0.75rem;
          font-size: 0.75rem;
        }

        .testimonial-item p.mb-0 {
          line-height: 1.4;
          color: #495057;
          font-size: 0.85rem;
        }

        @media (max-width: 767px) {
          .testimonial-item .card-body {
            padding: 1.25rem;
          }
          
          .testimonial-item p.mb-0 {
            font-size: 0.85rem;
          }
          
          .testimonial-avatar img {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
}

export default HomePage;