import { Container, Row, Col } from 'react-bootstrap';

function ContactPage() {
  return (
    <>
      <div className="serenita-hero mb-5">
        <div className="hero-content">
          <h1>İletişime Geçin</h1>
          <p>Kişisel gelişim yolculuğunuzda her adımda yanınızdayız</p>
        </div>
      </div>
      
      <Container className="position-relative contact-section mb-5 rounded-container">
        <Row className="mt-5 pt-5 justify-content-center">
          <Col lg={6} md={8} sm={10}>
            <div className="contact-container">
              <div className="heading">
                <span className="heading-text">Mesaj Gönderin</span>
              </div>
              <form action="" className="form">
                <input required className="input" type="text" name="name" id="name" placeholder="Adınız" />
                <input required className="input" type="email" name="email" id="email" placeholder="E-posta Adresiniz" />
                <textarea required className="input" name="message" id="message" placeholder="Mesajınız" rows={4}></textarea>
                <button className="submit-button" type="submit">
                  <span>Gönder</span>
                </button>
              </form>
              <div className="social-account-container">
                <span className="title">Bizi Takip Edin</span>
                <div className="social-accounts">
                  <button className="social-button">
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg>
                  </button>
                  <button className="social-button">
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                    </svg>
                  </button>
                  <button className="social-button">
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          .serenita-hero {
            position: relative;
            height: 500px;
            background-image: url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-bottom: 50px;
          }
          
          .serenita-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(47, 37, 133, 0.5) 0%, rgba(240, 40, 253, 0.5) 100%);
            opacity: 0.7;
          }
          
          .hero-content {
            position: relative;
            max-width: 800px;
            padding: 2rem;
            z-index: 2;
          }
          
          .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 900;
            margin-bottom: 1rem;
          }
          
          .hero-content p {
            font-size: 1.25rem;
            opacity: 0.9;
          }
          
          .contact-section {
            padding: 5rem 0;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            color: #212529;
            margin-top: 30px;
            margin-bottom: 50px;
            border-radius: 30px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          }
          
          .rounded-container {
            border-radius: 30px !important;
            overflow: hidden;
          }
          
          .contact-container {
            max-width: 500px;
            width: 100%;
            background: #F8F9FD;
            background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
            border-radius: 40px;
            padding: 35px 45px;
            border: 5px solid rgb(255, 255, 255);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transform: translateY(-50px);
            margin-left: auto;
            margin-right: auto;
            filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.05));
          }

          .heading {
            text-align: center;
            margin-bottom: 25px;
            position: relative;
            display: flex;
            justify-content: center;
          }

          .heading-text {
            font-size: 24px;
            font-weight: 600;
            color: rgb(16, 137, 211);
            position: relative;
            display: inline-block;
            padding: 0 10px;
            letter-spacing: 0.5px;
          }

          .heading-text:before {
            content: "";
            position: absolute;
            width: 40px;
            height: 2px;
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(16,137,211,1) 50%, rgba(255,255,255,0) 100%);
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
          }

          .form {
            margin-top: 20px;
          }

          .form .input {
            width: 100%;
            background: white;
            border: none;
            padding: 15px 20px;
            border-radius: 20px;
            margin-top: 15px;
            box-shadow: #cff0ff 0px 10px 10px -5px;
            border-inline: 2px solid transparent;
            font-size: 16px;
          }

          .form .input:focus {
            outline: none;
            border-inline: 2px solid #12B1D1;
          }

          .form .input::placeholder {
            color: rgb(170, 170, 170);
          }

          .submit-button {
            display: block;
            width: 100%;
            font-weight: bold;
            background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
            color: white;
            padding-block: 15px;
            margin: 20px auto;
            border-radius: 20px;
            box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
            border: none;
            transition: all 0.2s ease-in-out;
            font-size: 16px;
          }

          .submit-button:hover {
            transform: scale(1.03);
            box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
          }

          .submit-button:active {
            transform: scale(0.95);
            box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
          }

          .social-account-container {
            margin-top: 25px;
          }

          .social-account-container .title {
            display: block;
            text-align: center;
            font-size: 14px;
            color: rgb(170, 170, 170);
            margin-bottom: 15px;
          }

          .social-account-container .social-accounts {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 15px;
          }

          .social-account-container .social-accounts .social-button {
            background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
            border: 5px solid white;
            padding: 10px;
            border-radius: 50%;
            width: 40px;
            aspect-ratio: 1;
            display: grid;
            place-content: center;
            box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
            transition: all 0.2s ease-in-out;
          }

          .social-account-container .social-accounts .social-button .svg {
            fill: white;
            margin: auto;
            width: 18px;
            height: 18px;
          }

          .social-account-container .social-accounts .social-button:hover {
            transform: scale(1.2);
          }

          .social-account-container .social-accounts .social-button:active {
            transform: scale(0.9);
          }
          
          @media (max-width: 992px) {
            .contact-container {
              transform: translateY(0);
              margin-top: 2rem;
            }
            
            .contact-section {
              padding: 3rem 0;
            }
          }
          
          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2.5rem;
            }
            
            .serenita-hero {
              height: 400px;
            }
          }
        `}
      </style>
    </>
  );
}

export default ContactPage; 