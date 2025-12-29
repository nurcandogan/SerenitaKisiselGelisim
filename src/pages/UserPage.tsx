import { Link, useLoaderData } from 'react-router-dom';
import { Container, Row, Col, Card} from 'react-bootstrap';

// Kart stilleri için CSS
const cardStyles = `
  .user-page-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .page-title {
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 700;
    font-size: 2.8rem;
    position: relative;
    display: inline-block;
    background: linear-gradient(45deg, #2c3e50, #3498db, #2c3e50);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.05);
    animation: shimmer 2s infinite linear;
  }
  
  @keyframes shimmer {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  .page-title::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #3498db, #2c3e50);
    margin: 1rem auto 0;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .title-container {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }
  
  .title-badge {
    position: absolute;
    top: -10px;
    right: -30px;
    background: linear-gradient(45deg, #2BDEAC, #F028FD);
    color: white;
    border-radius: 20px;
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
    transform: rotate(15deg);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .user-card {
    transition: all 0.3s ease;
    border: none;
    border-radius: 15px;
    overflow: hidden;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    height: 100%;
  }
  
  .user-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
  }
  
  .user-card-header {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 2rem 1.5rem;
    text-align: center;
    color: #333;
  }
  
  .user-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    border: 3px solid rgba(255, 255, 255, 0.7);
    font-size: 2rem;
    font-weight: bold;
    color: #2F2585;
  }

  .user-card .card-title a {
    color: #212529;
    font-weight: 600;
    font-size: 1.3rem;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .user-card:hover .card-title a {
    color: #495057;
  }
  
  .user-card-body {
    padding: 1.5rem;
  }
  
  .user-info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: #6c757d;
    transition: all 0.3s ease;
  }
  
  .user-info-item:last-child {
    margin-bottom: 0;
  }
  
  .user-info-item i {
    width: 30px;
    height: 30px;
    background: #f8f9fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    color: #2F2585;
    transition: all 0.3s ease;
  }
  
  .user-card:hover .user-info-item i {
    background: rgba(47, 37, 133, 0.1);
    transform: scale(1.1);
  }
  
  .user-action-btn {
    background: #f0f2f5;
    color: #4a5568;
    border: none;
    border-radius: 25px;
    padding: 0.6rem 1.5rem;
    margin-top: 1rem;
    width: 100%;
    transition: all 0.3s ease;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-weight: 500;
  }
  
  .user-action-btn:hover {
    background: #e2e8f0;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    color: #2c3e50;
  }

  .inspiration-section {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 15px;
    padding: 3rem;
    margin-top: 5rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    position: relative;
  }
  
  .inspiration-icon {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #2BDEAC, #F028FD);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }

  .badge-container {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
    flex-wrap: wrap;
  }

  .achievement-badge {
    width: 80px;
    height: 80px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }

  .achievement-badge:hover {
    transform: scale(1.15);
  }

  .quote-text {
    font-size: 1.3rem;
    color: #495057;
    font-style: italic;
    margin: 2rem 0;
    padding: 0 1rem;
    position: relative;
    display: inline-block;
  }
  
  .quote-text::before,
  .quote-text::after {
    content: '"';
    font-size: 2rem;
    color: rgba(47, 37, 133, 0.2);
    position: absolute;
  }
  
  .quote-text::before {
    top: -10px;
    left: -15px;
  }
  
  .quote-text::after {
    bottom: -20px;
    right: -15px;
  }

  .author-text {
    color: #6c757d;
    font-size: 1rem;
    font-weight: 500;
  }

  .motivation-text {
    font-size: 1.1rem;
    color: #495057;
    margin-top: 2rem;
    line-height: 1.8;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 767px) {
    .inspiration-section {
      padding: 2rem 1rem;
    }
    
    .quote-text {
      font-size: 1.1rem;
    }
    
    .achievement-badge {
      width: 60px;
      height: 60px;
    }
    
    .badge-container {
      gap: 1rem;
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .user-page-container {
    animation: fadeIn 0.6s ease forwards;
  }
`;
 
interface UserParams{
    id:number;
    name:string;
    email:string;
    phone:string;
}

export const usersLoader = async () => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    return users
};

function UserPage() {
    const users = useLoaderData() as UserParams[]
    
    // Kullanıcı avatar baş harflerini oluştur
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }
    
    return (
        <>
            <style>{cardStyles}</style>
            <Container className="py-5 user-page-container">
                <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                    {users.map((user) => (
                        <Col key={user.id}>
                            <Card className="user-card h-100">
                                <div className="user-card-header">
                                    <div className="user-avatar">
                                        {getInitials(user.name)}
                                    </div>
                                    <Card.Title className="mb-0">
                                        <Link to={`/users/${user.id}`}>
                                            {user.name}
                                        </Link>
                                    </Card.Title>
                                </div>
                                <Card.Body className="user-card-body">
                                    <div className="user-info-item">
                                        <i className="bi bi-envelope"></i>
                                        <span>{user.email}</span>
                                    </div>
                                    <div className="user-info-item">
                                        <i className="bi bi-telephone"></i>
                                        <span>{user.phone}</span>
                                    </div>
                                    <Link to={`/users/${user.id}`} className="user-action-btn">
                                        <i className="bi bi-person-badge me-2"></i>
                                        Profili Görüntüle
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* İlham Verici Bölüm */}
                <div className="inspiration-section">
                    <div className="inspiration-icon">
                        <i className="bi bi-lightbulb"></i>
                    </div>
                    <h3 className="mb-4">Kişisel Gelişim Yolculuğunuz</h3>
                    
                    <div className="quote-text">
                        "Başarı, her gün tekrarlanan küçük çabaların toplamıdır."
                    </div>
                    <div className="author-text">- Robert Collier</div>

                    <div className="badge-container">
                        <div className="achievement-badge">
                            <i className="bi bi-trophy-fill" style={{ fontSize: '2rem', color: '#F028FD' }}></i>
                        </div>
                        <div className="achievement-badge">
                            <i className="bi bi-star-fill" style={{ fontSize: '2rem', color: '#2BDEAC' }}></i>
                        </div>
                        <div className="achievement-badge">
                            <i className="bi bi-heart-fill" style={{ fontSize: '2rem', color: '#2F2585' }}></i>
                        </div>
                    </div>

                    <div className="motivation-text">
                        Her adımınız, kişisel gelişim yolculuğunuzda yeni bir başarı hikayesi yazıyor. 
                        Hedeflerinize ulaşmak için attığınız her adım, sizi daha güçlü ve daha bilge kılıyor.
                        Unutmayın, her başarı hikayesi bir gün küçük bir adımla başlar.
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserPage