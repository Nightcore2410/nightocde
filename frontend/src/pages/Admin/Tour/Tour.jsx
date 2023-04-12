import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Space, Table } from "antd";
import Button from "react-bootstrap/Button";
import { getAllBookingTourApi } from "../../../redux/reducer/BookingReducer";

const Tour = () => {
  const dispatch = useDispatch();
  const bookingInfo = useSelector((state) => state.BookingReducer.bookingInfo);

  const getAllUser = () => {
    const actionThunk = getAllBookingTourApi();
    dispatch(actionThunk);
  };

  React.useEffect(() => {
    getAllUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "User Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "Tour Name",
      dataIndex: "tourName",
      key: "tourName",
    },

    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },

    {
      title: "Guest Size",
      key: "guestSize",
      dataIndex: "guestSize",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <Button variant="info">Edit</Button>
              </div>
            </div>
          </div>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <h1 className="text-center text-success fs-3 my-3">
        Booking Tour Management
      </h1>
      <Table
        columns={columns}
        pagination={{
          position: ["bottomRight"],
        }}
        dataSource={bookingInfo}
        id={bookingInfo._id}
      />
    </div>
  );
};

export default React.memo(Tour);
