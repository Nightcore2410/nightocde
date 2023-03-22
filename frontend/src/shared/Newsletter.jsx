import React from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/mg.png'



const Newsletter = () => {
  return (<section className="newsletter">
    <Container>
        <Row>
            <Col lg="6">
                <div className="newsletter_content">
                <h2>
                Hãy đăng ký ngay để nhận được thông tin hữu ích về du lịch.
                </h2>
                <div className="newsletter_input">
                    <input type="email" placeholder='Địa chỉ email của bạn'/>
                    <button className='btn newletter__btn'>Subsctibe</button>
                </div>
                <p>
                lorem ipsum dolor sit amet consectetur adiposicing elit. Obcaecati adipisci sunt in , provident facere ipsam
                </p>
                </div>
            </Col>
            <Col lg ="6">
                <div className="newletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default Newsletter
