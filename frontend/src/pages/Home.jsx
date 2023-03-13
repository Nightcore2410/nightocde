import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from'../assets/images/hero-img04.jpg'
import heroImg02 from'../assets/images/hero-img03.jpg'
import heroVideo from'../assets/images/hero-video.mp4'
import worldImg from '../assets/images/mountain.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'

const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle ={'Know before you go'}/>
            <img src={worldImg} alt="" />
            </div>
            <h1>Ngọn núi nhiều truyền thuyết và lưu giữ lịch sử {" "}
            <span className="highlight"></span>
            </h1>
            <p>
            Núi Bà Đen là ngọn núi nằm ở trung tâm tỉnh Tây Ninh, Việt Nam. Với độ cao 986 m,
            đây là ngọn núi cao nhất miền Nam Việt Nam hiện nay, được mệnh danh "Đệ nhất thiên sơn". 
            Theo Gia Định thành thông chí, tên gốc của núi Bà Đen là Bà Dinh. Những bậc kỳ lão địa phương
            thì cho rằng tên gốc là núi Một. 
            </p>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box'>
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <video src={heroVideo} alt=""controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-5'>
          <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg = '3'>
          <h5 className='services__subtitle'>
            Những gì chúng tôi phục vụ
          </h5>
          <h2 className='services__title'>
           Dịch vụ cung cấp tốt nhất dành cho bạn
          </h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>


  
<section>
  <Container>
    <Row>
      <Col lg="12" className="mb-5">
        <Subtitle subtitle={"Explore"} />
        <h2 className='featured__tour-title'>Our farured tours</h2>
      </Col>
      <FeaturedTourList/>
    </Row>
  </Container>

  
</section>

  </>
    
  
};

export default Home
