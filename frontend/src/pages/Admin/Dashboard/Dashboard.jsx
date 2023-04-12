import React from "react";
import { Space, Table } from "antd";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserApi,
  getAllUserApi,
} from "../../../redux/reducer/UserReducer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.userInfo);

  const getAllUser = () => {
    const actionThunk = getAllUserApi();
    dispatch(actionThunk);
  };

  React.useEffect(() => {
    getAllUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteUser = (userId) => {
    const actionThunk = deleteUserApi(userId);
    dispatch(actionThunk);
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },

    {
      title: "Role",
      key: "role",
      dataIndex: "role",
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
              <div
                className="col-4"
                onClick={() => {
                  handleDeleteUser(record._id);
                }}
              >
                <Button variant="danger">Delete</Button>
              </div>
            </div>
          </div>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-center text-success fs-3 my-3">User Management</h1>
      <Table
        columns={columns}
        pagination={{
          position: ["bottomRight"],
        }}
        dataSource={userData}
        id={userData._id}
      />
    </div>
  );
};

export default React.memo(Dashboard);
