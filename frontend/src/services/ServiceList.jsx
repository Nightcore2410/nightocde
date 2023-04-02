import React from 'react'
import ServiceCard from './ServiceCard'
import{Col} from "reactstrap"

import weatherImg from'../assets/images/weather.png'
import guideImg from'../assets/images/guide.png'
import customizationImg from'../assets/images/customization.png'

  const ServiceData =[
    {
    imUrl: weatherImg,
    title: "Thực phẩm và ẩm thực ",
    desc: "Các địa điểm ẩm thực tốt để thưởng thức các món ăn địa phương, thử những món ăn mới lạ, và tận hưởng những trải nghiệm ẩm thực độc đáo của từng vùng miền.",
    },
    {
    imUrl: guideImg,
    title: "Hướng dẫn viên du lịch",
    desc: "Các hướng dẫn viên du lịch chuyên nghiệp có thể giúp du khách tận hưởng trọn vẹn chuyến du lịch của mình, họ giúp cho du khách hiểu hơn về văn hóa, lịch sử và địa phương",
    },
    {
    imUrl: customizationImg,
    title: "Các dịch vụ ",
    desc: " Asia Travel - Thông tin du lịch phong phú - Đặt tour dễ dàng - Khuyến mại cực sốc => Liên hệ ngay cho chúng tôi để cảm nhận sự chu đáo của dịch vụ! ",
    },




  ]



const ServiceList = () => {
  return( 
  <>
  {ServiceData.map((item,index) => (
  <Col lg='3' key={index}>
    <ServiceCard item ={item} />
    </Col>
    ))}
  </>)
}

export default ServiceList
