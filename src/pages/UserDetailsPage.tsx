import { Container, Row, Col } from 'react-bootstrap';
import { Link, LoaderFunctionArgs, Outlet, useLoaderData, useParams } from 'react-router-dom';

// Stil tanımlamaları
const styles = `
  .user-profile-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .user-profile {
    background: linear-gradient(135deg, #f2f2f5 0%, #e6e6e9 100%);
    border-radius: 15px;
    padding: 3rem;
    margin-bottom: 2rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    border: 1px solid #e9ecef;
    text-align: center;
  }

  .user-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, #8a94a6, #5c677d);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  }

  .user-name {
    color: #212529;
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: none;
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    border: 0;
    position: relative;
    overflow: hidden;
    border-radius: 10rem;
    transition: all 0.02s;
    font-weight: bold;
    cursor: pointer;
    color: rgb(37, 37, 37);
    z-index: 0;
    box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
    background: #f5f5f7;
    margin: 0 0.5rem;
    text-decoration: none;
  }
  
  .button:hover {
    background: #e6e6e9;
    color: #333333;
  }
  
  .button:active {
    transform: scale(0.97);
  }
  
  .hoverEffect {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
  }
  
  .hoverEffect div {
    background: #e6e6e9;
    border-radius: 40rem;
    width: 10rem;
    height: 10rem;
    transition: 0.4s;
    filter: blur(5px);
    animation: effect infinite 3s linear;
    opacity: 0.5;
  }
  
  .button:hover .hoverEffect div {
    width: 8rem;
    height: 8rem;
  }
  
  @keyframes effect {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }

  .button i {
    margin-right: 8px;
  }

  .button.active .hoverEffect div {
    opacity: 0.8;
    width: 12rem;
    height: 12rem;
  }

  .custom-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
    padding-bottom: 1rem;
    flex-wrap: wrap;
  }

  .info-badge, .simple-badge {
    background: #f5f5f7;
    color: #4a5568;
    padding: 0.5rem 1rem;
    border-radius: 10rem;
    font-size: 0.9rem;
    border: 0;
    margin: 0.5rem;
    display: inline-block;
    box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
  }

  .simple-badge {
    transition: transform 0.2s ease;
  }
  
  .simple-badge:hover {
    transform: scale(0.97);
    background: #e6e6e9;
  }

  .user-stats {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 1.5rem 0;
    flex-wrap: wrap;
  }

  .stat-item {
    background: #f5f5f7;
    padding: 0.5rem 1rem;
    border-radius: 10rem;
    box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
    border: 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.02s;
    color: rgb(37, 37, 37);
    position: relative;
    overflow: hidden;
    z-index: 0;
  }
  
  .stat-item:hover {
    transform: scale(0.97);
    background: #e6e6e9;
    color: #333333;
  }
  
  .stat-item i {
    color: rgb(37, 37, 37);
    z-index: 1;
    position: relative;
    font-size: 1rem;
  }
  
  .stat-item:hover i {
    color: #333333;
  }
  
  .stat-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
    background: #e6e6e9;
    border-radius: 40rem;
    filter: blur(5px);
  }
  
  .stat-item:hover::after {
    opacity: 0.5;
  }

  .company-quote {
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    padding: 1.5rem;
    border-radius: 15px;
    border-left: 4px solid #2BDEAC;
    margin: 2rem auto 0;
    max-width: 80%;
    font-style: italic;
    color: #495057;
    text-align: left;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  }

  .company-quote i {
    color: #2BDEAC;
    font-size: 1.3rem;
    margin-right: 0.5rem;
  }

  /* Content Styles */
  .content-container {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 15px;
    padding: 2.5rem;
    margin: 2rem auto;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    border: 1px solid #e9ecef;
    max-width: 1000px;
  }

  .content-title {
    color: #2c3e50;
    font-weight: 700;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e9ecef;
    text-align: center;
    font-size: 1.8rem;
  }

  .content-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .content-item {
    padding: 1.2rem;
    border-bottom: 1px solid #f1f3f5;
    transition: all 0.3s ease;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  .content-item:hover {
    background: rgba(47, 37, 133, 0.03);
    transform: translateX(5px);
  }

  .content-link {
    color: #495057;
    text-decoration: none;
    display: block;
    font-weight: 500;
  }

  .content-link:hover {
    color: #2F2585;
  }

  .todo-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .todo-checkbox {
    width: 20px;
    height: 20px;
    accent-color: #2BDEAC;
  }

  .completed {
    text-decoration: line-through;
    color: #adb5bd;
  }

  /* Animasyon */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .user-profile, .content-container {
    animation: fadeIn 0.6s ease forwards;
  }

  .content-container {
    animation-delay: 0.2s;
  }

  /* Defs */
  @property --angle-1 {
    syntax: "<angle>";
    inherits: false;
    initial-value: -75deg;
  }

  @property --angle-2 {
    syntax: "<angle>";
    inherits: false;
    initial-value: -45deg;
  }

  /* Button Wrap Container */
  .button-wrap {
    position: relative;
    z-index: 2;
    border-radius: 999vw;
    background: transparent;
    pointer-events: none;
    transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
    margin: 0 0.5rem;
  }

  /* Button Shadow Container */
  .button-shadow {
    --shadow-cuttoff-fix: 2em;
    position: absolute;
    width: calc(100% + var(--shadow-cuttoff-fix));
    height: calc(100% + var(--shadow-cuttoff-fix));
    top: calc(0% - var(--shadow-cuttoff-fix) / 2);
    left: calc(0% - var(--shadow-cuttoff-fix) / 2);
    filter: blur(clamp(2px, 0.125em, 12px));
    -webkit-filter: blur(clamp(2px, 0.125em, 12px));
    -moz-filter: blur(clamp(2px, 0.125em, 12px));
    -ms-filter: blur(clamp(2px, 0.125em, 12px));
    overflow: visible;
    pointer-events: none;
  }

  /* Shadow */
  .button-shadow::after {
    content: "";
    position: absolute;
    z-index: 0;
    inset: 0;
    border-radius: 999vw;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
    width: calc(100% - var(--shadow-cuttoff-fix) - 0.25em);
    height: calc(100% - var(--shadow-cuttoff-fix) - 0.25em);
    top: calc(var(--shadow-cuttoff-fix) - 0.5em);
    left: calc(var(--shadow-cuttoff-fix) - 0.875em);
    padding: 0.125em;
    box-sizing: border-box;
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
    transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
    overflow: visible;
    opacity: 1;
  }

  /* Glass Button */
  .glass-button {
    /* Basic Styling */
    --border-width: clamp(1px, 0.0625em, 4px);
    all: unset;
    cursor: pointer;
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    pointer-events: auto;
    z-index: 3;
    background: linear-gradient(
      -75deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.05)
    );
    border-radius: 999vw;
    box-shadow:
      inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
      inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
      0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2),
      0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.2),
      0 0 0 0 rgba(255, 255, 255, 1);
    backdrop-filter: blur(clamp(1px, 0.125em, 4px));
    -webkit-backdrop-filter: blur(clamp(1px, 0.125em, 4px));
    -moz-backdrop-filter: blur(clamp(1px, 0.125em, 4px));
    -ms-backdrop-filter: blur(clamp(1px, 0.125em, 4px));
    transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .glass-button:hover {
    transform: scale(0.975);
    backdrop-filter: blur(0.01em);
    -webkit-backdrop-filter: blur(0.01em);
    -moz-backdrop-filter: blur(0.01em);
    -ms-backdrop-filter: blur(0.01em);
    box-shadow:
      inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
      inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
      0 0.15em 0.05em -0.1em rgba(0, 0, 0, 0.25),
      0 0 0.05em 0.1em inset rgba(255, 255, 255, 0.5),
      0 0 0 0 rgba(255, 255, 255, 1);
  }

  /* Button Text */
  .glass-button span {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    font-family: "Inter", sans-serif;
    letter-spacing: -0.05em;
    font-weight: 500;
    font-size: 1em;
    color: rgba(50, 50, 50, 1);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 0em 0.25em 0.05em rgba(0, 0, 0, 0.1);
    transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
    padding-inline: 1.5em;
    padding-block: 0.875em;
  }

  .glass-button:hover span {
    text-shadow: 0.025em 0.025em 0.025em rgba(0, 0, 0, 0.12);
  }

  /* Text Shine Effect */
  .glass-button span::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    width: calc(100% - var(--border-width));
    height: calc(100% - var(--border-width));
    top: calc(0% + var(--border-width) / 2);
    left: calc(0% + var(--border-width) / 2);
    box-sizing: border-box;
    border-radius: 999vw;
    overflow: clip;
    background: linear-gradient(
      var(--angle-2),
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 40% 50%,
      rgba(255, 255, 255, 0) 55%
    );
    z-index: 3;
    mix-blend-mode: screen;
    pointer-events: none;
    background-size: 200% 200%;
    background-position: 0% 50%;
    background-repeat: no-repeat;
    transition:
      background-position calc(400ms * 1.25) cubic-bezier(0.25, 1, 0.5, 1),
      --angle-2 calc(400ms * 1.25) cubic-bezier(0.25, 1, 0.5, 1);
  }

  .glass-button:hover span::after {
    background-position: 25% 50%;
  }

  .glass-button:active span::after {
    background-position: 50% 15%;
    --angle-2: -15deg;
  }

  /* Button Outline */
  .glass-button::after {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;
    border-radius: 999vw;
    width: calc(100% + var(--border-width));
    height: calc(100% + var(--border-width));
    top: calc(0% - var(--border-width) / 2);
    left: calc(0% - var(--border-width) / 2);
    padding: var(--border-width);
    box-sizing: border-box;
    background: conic-gradient(
        from var(--angle-1) at 50% 50%,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0) 5% 40%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0) 60% 95%,
        rgba(0, 0, 0, 0.5)
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
    transition:
      all 400ms cubic-bezier(0.25, 1, 0.5, 1),
      --angle-1 500ms ease;
    box-shadow: inset 0 0 0 calc(var(--border-width) / 2) rgba(255, 255, 255, 0.5);
  }

  .glass-button:hover::after {
    --angle-1: -125deg;
  }

  .glass-button:active::after {
    --angle-1: -75deg;
  }

  /* Shadow Hover */
  .button-wrap:has(.glass-button:hover) .button-shadow {
    filter: blur(clamp(2px, 0.0625em, 6px));
    -webkit-filter: blur(clamp(2px, 0.0625em, 6px));
    -moz-filter: blur(clamp(2px, 0.0625em, 6px));
    -ms-filter: blur(clamp(2px, 0.0625em, 6px));
    transition: filter 400ms cubic-bezier(0.25, 1, 0.5, 1);
  }

  .button-wrap:has(.glass-button:hover) .button-shadow::after {
    top: calc(var(--shadow-cuttoff-fix) - 0.875em);
    opacity: 1;
  }

  /* Rotation */
  .button-wrap:has(.glass-button:active) {
    transform: rotate3d(1, 0, 0, 25deg);
  }

  .button-wrap:has(.glass-button:active) .glass-button {
    box-shadow:
      inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
      inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
      0 0.125em 0.125em -0.125em rgba(0, 0, 0, 0.2),
      0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.2),
      0 0.225em 0.05em 0 rgba(0, 0, 0, 0.05),
      0 0.25em 0 0 rgba(255, 255, 255, 0.75),
      inset 0 0.25em 0.05em 0 rgba(0, 0, 0, 0.15);
  }

  .button-wrap:has(.glass-button:active) .button-shadow {
    filter: blur(clamp(2px, 0.125em, 12px));
    -webkit-filter: blur(clamp(2px, 0.125em, 12px));
    -moz-filter: blur(clamp(2px, 0.125em, 12px));
    -ms-filter: blur(clamp(2px, 0.125em, 12px));
  }

  .button-wrap:has(.glass-button:active) .button-shadow::after {
    top: calc(var(--shadow-cuttoff-fix) - 0.5em);
    opacity: 0.75;
  }

  .button-wrap:has(.glass-button:active) span {
    text-shadow: 0.025em 0.25em 0.05em rgba(0, 0, 0, 0.12);
  }

  /* Active Button */
  .button-wrap:has(.glass-button.active) .button-shadow::after {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2));
    opacity: 0.9;
  }

  .glass-button.active {
    backdrop-filter: blur(0.05em);
    -webkit-backdrop-filter: blur(0.05em);
    -moz-backdrop-filter: blur(0.05em);
    -ms-backdrop-filter: blur(0.05em);
    background: linear-gradient(
      -75deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1)
    );
  }

  .glass-button.active span {
    color: rgba(25, 25, 25, 1);
    text-shadow: 0.025em 0.025em 0.05em rgba(0, 0, 0, 0.2);
  }

  .glass-button i {
    font-size: 1.2rem;
    display: inline-flex;
  }
`;

interface userDetailParams {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
    };
}

export const usersDetailLoader = async ({params}: LoaderFunctionArgs) => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await response.json()
    return data;
}

function UserDetailsPage() {
    const data = useLoaderData() as userDetailParams;
    const {userId} = useParams();

    // İlk harf avatarı oluştur
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }

    return (
        <>
            <style>{styles}</style>
            <Container className="py-5 user-profile-container">
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className="user-profile">
                            <div className="user-avatar">
                                {getInitials(data.name)}
                            </div>
                            <h1 className="user-name">{data.name}</h1>
                            
                            <div className="user-stats">
                                <div className="stat-item">
                                    <i className="bi bi-person-circle"></i>
                                    <span>{data.username}</span>
                                </div>
                                <div className="stat-item">
                                    <i className="bi bi-envelope"></i>
                                    <span>{data.email}</span>
                                </div>
                                <div className="stat-item">
                                    <i className="bi bi-phone"></i>
                                    <span>{data.phone}</span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <span className="simple-badge me-2">
                                    <i className="bi bi-globe me-1"></i>
                                    {data.website}
                                </span>
                                <span className="simple-badge">
                                    <i className="bi bi-building me-1"></i>
                                    {data.company.name}
                                </span>
                            </div>

                            <div className="company-quote">
                                <i className="bi bi-quote"></i>
                                {data.company.catchPhrase}
                            </div>
                        </div>

                        <div className="custom-tabs">
                            <div className="button-wrap">
                                <Link 
                                    to={`/users/${userId}/posts`}
                                    className={`glass-button ${window.location.pathname.includes('/posts') ? 'active' : ''}`}
                                >
                                    <span>
                                        <i className="bi bi-file-text"></i>
                                        Gönderiler
                                    </span>
                                    <div className="button-shadow"></div>
                                </Link>
                            </div>
                            
                            <div className="button-wrap">
                                <Link 
                                    to={`/users/${userId}/albums`}
                                    className={`glass-button ${window.location.pathname.includes('/albums') ? 'active' : ''}`}
                                >
                                    <span>
                                        <i className="bi bi-images"></i>
                                        Albümler
                                    </span>
                                    <div className="button-shadow"></div>
                                </Link>
                            </div>
                            
                            <div className="button-wrap">
                                <Link 
                                    to={`/users/${userId}/todos`}
                                    className={`glass-button ${window.location.pathname.includes('/todos') ? 'active' : ''}`}
                                >
                                    <span>
                                        <i className="bi bi-check2-square"></i>
                                        Yapılacaklar
                                    </span>
                                    <div className="button-shadow"></div>
                                </Link>
                            </div>
                        </div>

                        <div className="content-container">
                            <Outlet/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default UserDetailsPage