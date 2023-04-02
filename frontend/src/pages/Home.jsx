import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from'../assets/images/hero-img04.jpg'
import heroImg02 from'../assets/images/hero-img03.jpg'
import heroVideo from'../assets/images/video1.mp4'
import worldImg from '../assets/images/mountain.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import experienceImg from '../assets/images/logo1.png'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'
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
<section>
  <Container>
    <Row>
      <Col lg= '6 '>
        <div className="experience__content">
          <Subtitle subtitle={'Experience'}/>
          <h2>Với tất cả kinh nghiệm<br/>Chúng tôi sẽ phục vụ bạn</h2>
          <p>
          Với nhiều năm kinh nghiệm trong ngành du lịch, chúng tôi tự tin khẳng định rằng chúng tôi sẽ làm hài lòng các khách hàng của mình.
            <br/>
            Chúng tôi hiểu rằng mỗi chuyến du lịch là một trải nghiệm độc đáo, và chúng tôi cam kết sẽ tạo ra những trải nghiệm tuyệt vời cho bạn.
          </p>
        </div>
        <div className="counter__wrapper d-flex align-items-center gap-5">
        <div className="counter__box">
          <span>20k+</span>
          <h6>Successful</h6>
        </div>
        <div className="counter__box">
          <span>6k+</span>
          <h6>Regular clients</h6>
        </div>
        <div className="counter__box">
          <span>10</span>
          <h6>year experience</h6>
          </div>
        </div>
      </Col>
      <Col lg= '6 '>
      <div className="experience__img">
      <img src={experienceImg} alt="" />
      </div>
      </Col>
    </Row>
  </Container>
</section>

<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'Gallery'}/>
        <h2 className='gallery__title'>
        Hãy ghé thăm bộ sưu tập ảnh du lịch của khách hàng của chúng tôi.
        </h2>
      </Col>
      <Col lg='12'>
      <MasonryImagesGallery/>
      </Col>
    </Row>
  </Container>
</section>

<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'Fan love'}/>
        <h2 className='testimonial__title'>
        Những fan hâm mộ của chúng tôi nói gì về chúng tôi?
        </h2>
      </Col>
      <Col lg='12'>
      <Testimonials/>
      </Col>
    </Row>
  </Container>
</section>
<Newsletter/>


  </>
};

export default Home
