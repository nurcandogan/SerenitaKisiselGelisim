import React from 'react'
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

interface UserAlbumParams{
    userId: number;
    id: number;
    title: string;
}

export const userAlbumLoader = async ({params}: LoaderFunctionArgs) => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`)
    const albums = await response.json()
    return albums;
}

function UserAlbumsPage() {
    const albums = useLoaderData() as UserAlbumParams[];
    
    // Her albüm için havalı bir arkaplan rengi oluştur
    const getSubtleGradient = (id: number) => {
        const gradients = [
            'linear-gradient(135deg, #667eea, #764ba2)',
            'linear-gradient(135deg, #5ee7df, #43c6ac)',
            'linear-gradient(135deg, #ff9a9e, #fad0c4)',
            'linear-gradient(135deg, #6a11cb, #2575fc)',
            'linear-gradient(135deg, #30cfd0, #330867)',
            'linear-gradient(135deg, #f5576c, #f093fb)',
            'linear-gradient(135deg, #a8edea, #fed6e3)',
            'linear-gradient(135deg, #0ba360, #3cba92)',
            'linear-gradient(135deg, #fccb90, #d57eeb)',
            'linear-gradient(135deg, #396afc, #2948ff)'
        ];
        return gradients[id % gradients.length];
    };
    
    // Her albüm için ikon seç
    const getIcon = (id: number) => {
        const icons = [
            'bi-image', 'bi-images', 'bi-camera', 'bi-collection', 
            'bi-card-image'
        ];
        return icons[id % icons.length];
    };
    
    return (
        <>
            <h3 className="content-title">Fotoğraf Albümleri</h3>
            
            <div className="albums-stats mb-4">
                <div className="album-stat">
                    <i className="bi bi-images"></i>
                    <span>Toplam Albüm: <strong>{albums.length}</strong></span>
                </div>
                <div className="album-stat">
                    <i className="bi bi-eye"></i>
                    <span>Son Görüntülenme: <strong>Dün</strong></span>
                </div>
            </div>
            
            <Row xs={1} sm={2} md={3} className="g-4 album-grid">
                {albums.map((album) => (
                    <Col key={album.id}>
                        <Link to={`/users/${album.userId}/albums/${album.id}`} className="album-link">
                            <Card className="album-card">
                                <div 
                                    className="album-cover" 
                                    style={{ background: getSubtleGradient(album.id) }}
                                >
                                    <i className={`bi ${getIcon(album.id)}`}></i>
                                    <div className="album-number">{album.id}</div>
                                </div>
                                <Card.Body>
                                    <Card.Title className="album-title">
                                        {album.title.charAt(0).toUpperCase() + album.title.slice(1)}
                                    </Card.Title>
                                    <div className="album-meta">
                                        <span className="album-photos">
                                            <i className="bi bi-image me-1"></i> Fotoğraflar
                                        </span>
                                        <span className="album-view">
                                            <i className="bi bi-eye me-1"></i> Görüntüle
                                        </span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
            
            <style>{`
                .content-title {
                    margin-bottom: 1.5rem;
                    color: #2c3e50;
                    font-weight: 600;
                    text-align: center;
                }
                
                .albums-stats {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    justify-content: center;
                    margin-bottom: 2rem;
                }
                
                .album-stat {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #f8f9fa;
                    padding: 0.7rem 1.2rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
                    border: 1px solid #e9ecef;
                }
                
                .album-stat i {
                    color: #2F2585;
                    font-size: 1.1rem;
                }
                
                .album-grid {
                    margin-top: 1rem;
                }
                
                .album-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }
                
                .album-card {
                    border: none;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
                    transition: all 0.4s ease;
                    height: 100%;
                    transform: translateY(0);
                }
                
                .album-card:hover {
                    transform: translateY(-12px) scale(1.02);
                    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
                }
                
                .album-cover {
                    height: 180px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                
                .album-cover i {
                    font-size: 3.5rem;
                    color: rgba(255, 255, 255, 0.85);
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                }
                
                .album-number {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 38px;
                    height: 38px;
                    background: rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(4px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    border-radius: 50%;
                    font-weight: bold;
                    font-size: 0.9rem;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }
                
                .album-title {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #2c3e50;
                    margin-bottom: 0.8rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                
                .album-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                
                .album-meta span {
                    color: #6c757d;
                    font-size: 0.8rem;
                    padding: 0.4rem 0.6rem;
                    background: #f8f9fa;
                    border-radius: 20px;
                    transition: all 0.3s ease;
                }
                
                .album-meta span:hover {
                    background: #2F2585;
                    color: white;
                }
                
                @media (max-width: 576px) {
                    .album-cover {
                        height: 150px;
                    }
                }
            `}</style>
        </>
    )
}

export default UserAlbumsPage