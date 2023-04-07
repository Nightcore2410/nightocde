import React from "react";
import { Space, Button } from "antd";
import { Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserApi,
  getAllUserApi,
} from "../../../redux/reducer/UserReducer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const getAllUser = () => {
    const actionThunk = getAllUserApi();
    dispatch(actionThunk);
  };
  const handleDeleteUser = (userId) => {
    dispatch(deleteUserApi(userId));
  };
  React.useEffect(() => {
    getAllUser();
  }, []);

  const userData = useSelector((state) => state.userReducer.userInfo);
  const renderDataTable = () => {
    return userData.map((user, index) => (
      <tr key={index}>
        <th scope="row">{user._id}</th>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.role}</td>
        <td>
          <Space>
            <Button type="primary" style={{ background: "#389e0d" }}>
              Adding
            </Button>
            <Button
              type="primary"
              style={{ background: "#fa541c" }}
              onClick={() => {
                handleDeleteUser(user._id);
              }}
            >
              Delete
            </Button>
            <Button type="primary" style={{ background: "#001d66" }}>
              Edit
            </Button>
          </Space>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <Table responsive style={{ padding: 0, textAlign: "center" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>email</th>
            <th>password</th>
            <th>role</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{renderDataTable()}</tbody>
      </Table>
    </>
  );
};

export default React.memo(Dashboard);
