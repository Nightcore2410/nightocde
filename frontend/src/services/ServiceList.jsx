import React from 'react'
import ServiceCard from './ServiceCard'
import{Col} from "reactstrap"

import weatherImg from'../assets/images/weather.png'
import guideImg from'../assets/images/guide.png'
import customizationImg from'../assets/images/customization.png'

  const ServiceData =[
    {
    imUrl: weatherImg,
    title: "cmm tuoi m ",
    desc: "tuoi loz cmm tui m tuoi loz cmm tui m ",
    },
    {
    imUrl: guideImg,
    title: "cmm tuoi m ",
    desc: "tuoi loz cmm tui m tuoi loz cmm tui m",
    },
    {
    imUrl: customizationImg,
    title: "cmm tuoi m ",
    desc: "tuoi loz cmm tui m tuoi loz cmm tui m  ",
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
