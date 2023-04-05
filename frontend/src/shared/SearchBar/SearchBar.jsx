import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "../../utlis/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const loactionRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();
  const searchHandlef = async () => {
    const loaction = loactionRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
    if (loaction === "" || distance === "" || maxGroupSize === "") {
      return alert("tất cả thông tin tìm kiếm ");
    }
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${loaction}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );
    if (!res.ok) alert("Something went wrong");
    const result = await res.json();
    navigate(
      `/tours/search?city=${loaction}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };
  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap3 form__group form__group-fasr">
            <span>
              <i className="ri-map-pin-user-fill"> </i>
            </span>
            <div>
              <h6> Loaction </h6>
              <input
                type="text"
                placeholder=" Bạn đang ở đâu ?"
                ref={loactionRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap3 form__group form__group-fasr">
            <span>
              <i className="ri-compass-3-line"></i>
            </span>
            <div>
              <h6> Distance</h6>
              <input
                type="number"
                placeholder=" khoảng cách k/m"
                ref={distanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap3 form__group form__group-last">
            <span>
              <i className=" ri-group-fill"></i>
            </span>
            <div>
              <h6> Max People</h6>
              <input type="number" placeholder=" 0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandlef}>
            <i className="ri-search-2-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
