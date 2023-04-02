import React, { useState,useContext } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {useNavigate} from "react-router-dom"
import {BASE_URL} from '../../utlis/config'
import { AuthContext } from '../../context/AuthContext';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews,title } = tour;
    const navigate = useNavigate ()

    const {user} = useContext(AuthContext)

    const [booking, setBooking] = useState({
        userID: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: '1',
        bookAt: '',
    });

    const handleChange = (e) => {
      setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const serviceFee = 10
    
    const totalAmount = Number (price) * Number (booking.guestSize) + Number (serviceFee)
    //const formattedprice = price.toLocaleString("vi-VN");
    //const formattedtotalAmount = totalAmount.toLocaleString("vi-VN");
    // Gửi dữ liệu đến máy chủ
    const handleClick = async (e) => {
        e.preventDefault();
        console.log(booking)

        try {
          if(!user || user===undefined || user===null){
            return alert('Please sign in')
          }
          const res = await fetch(`${BASE_URL}/booking`,{
            method:'post',
            headers:{'content-type':'application/json'}, credentials:'include',body:JSON.stringify(booking)
          })
          const result = await res.json()

          if(!res.ok){
            return alert(result.message)
          }
          navigate ("/thank-you")
        } catch (err) {
          alert(err.message)
        }

        
        
    };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          {totalAmount} $<span>/Mỗi người</span>
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
              {totalAmount} VND <i className="ri-close-circle-fill"></i> Một người
            </h5>
            <span>{totalAmount} VND</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>VAT</h5>
            <span>10 $</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>tổng cộng</h5>
            <span>{totalAmount} $</span>
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
