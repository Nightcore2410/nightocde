import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {useNavigate} from "react-router-dom"

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const navigate = useNavigate ()



  
  
    const [credentials, setCredentials] = useState({
        userID: '01',
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: '1',
        bookAt: '',
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const serviceFee = 10000
    
    const totalAmount = Number (price) * Number (credentials.guestSize) + Number (serviceFee)
    const formattedprice = price.toLocaleString("vi-VN");
    const formattedtotalAmount = totalAmount.toLocaleString("vi-VN");
    // Gửi dữ liệu đến máy chủ
    const handleClick = (e) => {
        e.preventDefault();
        navigate ("/thank-you")
        
    };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          {formattedprice} VND<span>/Mỗi người</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-half-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      <div className="booking__form">
        <h5>Thông tin</h5>
        <Form className="booking__info-form " onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Họ và Tên"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Số điện thoại"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Số người"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-2">
              {formattedprice} VND <i className="ri-close-circle-fill"></i> Một người
            </h5>
            <span>{formattedprice} VND</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>VAT</h5>
            <span>10.000 VND</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>tổng cộng</h5>
            <span>{formattedtotalAmount} VND</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Đặt ngay
        </Button>
      </div>
    </div>
  );
};

export default Booking;
