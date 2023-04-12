import React from "react";
import { useSelector } from "react-redux";
import styled from "./Loading.module.css";
import loadingImage from "../../assets/images/loading.gif";
const Loading = () => {
  const isLoading = useSelector((state) => state.LoadingReducer.isLoading);
  if (isLoading) {
    return (
      <div className={styled.loading}>
        <img src={loadingImage} alt="loading-animation" />
      </div>
    );
  } else {
    return <></>;
  }
};

export default React.memo(Loading);
