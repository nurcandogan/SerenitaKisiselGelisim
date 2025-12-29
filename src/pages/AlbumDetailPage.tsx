import { Container, Row, Col, Card } from 'react-bootstrap';
import { LoaderFunctionArgs, useLoaderData, useParams } from 'react-router-dom';
import { useStore } from '../store/store';

 export interface AlbumDetailParams{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    userId: number;
}

 export const albumDetailsLoader = async ({params}: LoaderFunctionArgs) => {
  const response = await fetch (`https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`);
  const albums = await response.json();
  return albums;

}

function AlbumDetailPage() {
  const albums = useLoaderData() as AlbumDetailParams[];
  const {userId} = useParams();
  const {favorites, addFavorite, removeFavorite} = useStore();

const handleFavoriteClick = (photo:AlbumDetailParams) => {
  if (favorites.some((fav) => fav.id === photo.id))
     {removeFavorite(photo.id);

     }else {
    addFavorite({...photo, userId: Number(userId)});
     }
};

  // Hover efekti için CSS
  const hoverCardStyle = `
    .hover-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .hover-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
    }

    .photo-card {
      border-radius: 10px;
      overflow: hidden;
    }

    .photo-card img {
      transition: transform 0.3s ease;
    }

    .photo-card:hover img {
      transform: scale(1.05);
    }
    
    .btn-purple {
      background-color: #343d46;
      border-color: #343d46;
      color: white;
      transition: all 0.3s ease;
    }
    
    .btn-purple:hover, .btn-purple:focus, .btn-purple:active {
      background-color: #232830 !important;
      border-color: #232830 !important;
      color: white;
      box-shadow: 0 5px 15px rgba(35, 40, 48, 0.3) !important;
      transform: translateY(-2px);
    }
    
    .btn-outline-purple {
      color: #343d46;
      border-color: #343d46;
      background-color: transparent;
      transition: all 0.3s ease;
    }
    
    .btn-outline-purple:hover, .btn-outline-purple:focus, .btn-outline-purple:active {
      color: white !important;
      background-color: #343d46 !important;
      border-color: #343d46 !important;
      box-shadow: 0 5px 15px rgba(35, 40, 48, 0.3) !important;
      transform: translateY(-2px);
    }

    /* Yeni animasyonlu favori butonu için CSS */
    .fancy-nav ul {
      position: relative;
      display: flex;
      gap: 25px;
      padding: 0;
      margin: 0 auto;
      justify-content: center;
    }
    
    .fancy-nav ul li {
      position: relative;
      list-style: none;
      width: 60px;
      height: 60px;
      background: #fff;
      border-radius: 60px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      transition: 0.5s;
    }
    
    .fancy-nav ul li:hover {
      width: 180px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0);
    }
    
    .fancy-nav ul li::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 60px;
      background: linear-gradient(45deg, var(--i), var(--j));
      opacity: 0;
      transition: 0.5s;
    }
    
    .fancy-nav ul li:hover::before {
      opacity: 1;
    }
    
    .fancy-nav ul li::after {
      content: "";
      position: absolute;
      top: 10px;
      width: 100%;
      height: 100%;
      border-radius: 60px;
      background: linear-gradient(45deg, var(--i), var(--j));
      transition: 0.5s;
      filter: blur(15px);
      z-index: -1;
      opacity: 0;
    }
    
    .fancy-nav ul li:hover::after {
      opacity: 0.5;
    }
    
    .fancy-nav ul li .icon {
      color: #777;
      font-size: 1.75em;
      transition: 0.5s;
      transition-delay: 0.25s;
      z-index: 1;
    }
    
    .fancy-nav ul li:hover .icon {
      transform: scale(0);
      color: #fff;
      transition-delay: 0s;
    }
    
    .fancy-nav ul li span {
      position: absolute;
    }
    
    .fancy-nav ul li .title {
      color: #ff0000;
      font-size: 1.1em;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      transform: scale(0);
      transition: 0.5s;
      transition-delay: 0s;
      z-index: 1;
      text-shadow: 0px 0px 3px #fff;
      font-weight: bold;
    }
    
    .fancy-nav ul li:hover .title {
      transform: scale(1);
      transition-delay: 0.25s;
      font-size: 1.3em;
      font-weight: bold;
      color: #ff0000;
    }
  `;

  return (
    <Container className="py-4">
      <style>{hoverCardStyle}</style>
      <h2 className="mb-4 text-center">Fotoğraf Albümü</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {albums.map((album) => (
          <Col key={album.id}>
            <Card className="h-100 shadow-sm hover-card photo-card">
              <Card.Img 
                variant="top" 
                src={`https://picsum.photos/300/200?random=${album.id}`}
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Card.Title className="fs-6 text-truncate mb-0">{album.title.charAt(0).toUpperCase() + album.title.slice(1)}</Card.Title>
                  <div className="fancy-nav" style={{ transform: 'scale(0.75)', marginRight: '15px' }}>
                    <ul style={{ margin: 0, padding: 0 }}>
                      <li 
                        style={{ 
                          '--i': favorites.some((fav) => fav.id === album.id) ? '#FF5E62' : '#FF9966', 
                          '--j': favorites.some((fav) => fav.id === album.id) ? '#FF9966' : '#FF5E62',
                          width: '45px',
                          height: '45px' 
                        } as React.CSSProperties}
                        onClick={() => handleFavoriteClick(album)}
                      >
                        <span className="icon" style={{ fontSize: '2em' }}>❤️</span>
                        <span className="title" style={{ fontSize: '1.4em' }}>{favorites.some((fav) => fav.id === album.id) ? 'Çıkar' : 'Favorile'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-auto"></div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AlbumDetailPage