import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import heroVideo from "../../assets/images/video1.mp4";
import worldImg from "../../assets/images/mountain.png";
import experienceImg from "../../assets/images/logo1.png";
import Subtitle from "../../shared/Subtitle";
import ServiceList from "../../services/ServiceList";
import MasonryImagesGallery from "../../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../../components/Testimonial/Testimonials";
import Newsletter from "../../shared/Newsletter";
const About = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know before you go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Ngọn núi nhiều truyền thuyết và lưu giữ lịch sử{" "}
                  <span className="highlight"></span>
                </h1>
                <p>
                  Núi Bà Đen là ngọn núi nằm ở trung tâm tỉnh Tây Ninh, Việt
                  Nam. Với độ cao 986 m, đây là ngọn núi cao nhất miền Nam Việt
                  Nam hiện nay, được mệnh danh "Đệ nhất thiên sơn". Theo Gia
                  Định thành thông chí, tên gốc của núi Bà Đen là Bà Dinh. Những
                  bậc kỳ lão địa phương thì cho rằng tên gốc là núi Một.
                </p>
              </div>
            </Col>
          </Row>
          <Col lg="2">
            <div className="hero__img1-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center"></div>
            <h1>
              Núi Bà Đen huyền thoại <span className="highlight"></span>
            </h1>
            <p>
              Hàng năm, cứ đến ngày 14 tháng giêng âm lịch, Huyện ủy Hòa Thành
              đều tổ chức trọng thể lễ họp mặt truyền thống Động Kim Quang để
              tưởng niệm những người đã hy sinh vì sự nghiệp giải phóng dân tộc.
              Những người đến đây, cả thế hệ ngày trước và ngày nay đã dành phút
              giây tưởng niệm để vẳng nghe tiếng vọng của hồn thiêng sông núi,
              kính cẩn nghiêng mình trước vong linh của những người đã mất từ
              Động Kim Quang để quyết tử bảo vệ từng tấc đất quê hương, làm nên
              huyền thọai lịch sử cho muôn đời sau.
            </p>
            <p>
              Cứ mỗi độ xuân về, cả triệu du khánh từ mọi miền đất nước lại tụ
              về đây để tham dự Hội xuân Núi Bà, thong dong bước trên con đường
              mát rượi bóng cây và tươi những sắc hoa. Được trôi bồng bềnh trên
              những ca bin cáp treo để lên viếng Chùa Bà, được đắm mình với
              những huyền thoại phong phú của Núi Bà gắn liền với những cái tên:
              Động Kim quang, Chùa Hang, Hang Gió, Động Thanh Long…
            </p>
            <p>
              Nơi đỉnh núi ngày xưa địch dùng làm một căn cứ thông tin, khống
              chế vùng giải phóng của ta, nay đã khác xưa. Tương lai, rồi sẽ có
              một con đường lên đỉnh núi này, và rất có thể có thêm đường cáp
              treo lên đỉnh núi để đưa du khách lên đây, tận hưởng không khí
              trong lành giữa khoảng không bao la. Nhưng ngay bây giờ đỉnh núi
              này cũng đã được sử dụng cho một công trình đáp ứng nhu cầu đời
              sống văn hoá của người Tây Ninh. Tận dụng lợi thế chiều cao Đài
              Phát thanh truyền hình Tây Ninh đã đưa hệ thống phát hình lên đây.
              Một ăng ten cao 77 mét, nếu tính cả chiều cao của núi, thì ăng ten
              phát sóng của Đài Truyền hình Tây Ninh cao hơn 1000 mét. Trước đây
              công suất phát sóng là 1000KWx2, nay công suất đã được nâng lên
              1000 KWx5. Nhờ thế mà Tây Ninh bây giờ không còn vùng lõm của hệ
              thống phát hình. Khắp nơi trong tỉnh, kể cả một số tỉnh lân cận
              cũng có thể xem được các chương trình của truyền hình Tây Ninh.
              Cũng trên đỉnh Núi Bà Đen còn có máy phát sóng phát thanh FM 20 KW
              - với chương trình phát thanh của Đài Tiếng nói Việt Nam phát
              24/24 giờ trong ngày. Ngoài ra, còn có thêm hệ thống tiếp sóng Đài
              Truyền hình Việt Nam kênh VTV1.
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">Những gì chúng tôi phục vụ</h5>
              <h2 className="services__title">
                Dịch vụ cung cấp tốt nhất dành cho bạn
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5"></Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6 ">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  with our all experience
                  <br />
                  we will serve you
                </h2>
                <p>
                  Lorem isum dolor sit amet. consectetur adipisicing elit.
                  <br />
                  Quas aliquam , hic tempora inventore suscipit unde
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
            <Col lg="6 ">
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
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Hãy ghé thăm bộ sưu tập ảnh du lịch của khách hàng của chúng
                tôi.
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fan love"} />
              <h2 className="testimonial__title">
                Những fan hâm mộ của chúng tôi nói gì về chúng tôi?
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default React.memo(About);
