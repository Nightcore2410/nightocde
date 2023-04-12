// import React from "react";
// import { Space, Button, Table, Tag } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteUserApi,
//   getAllUserApi,
// } from "../../../redux/reducer/UserReducer";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const getAllUser = () => {
//     const actionThunk = getAllUserApi();
//     dispatch(actionThunk);
//   };
//   const handleDeleteUser = (userId) => {
//     dispatch(deleteUserApi(userId));
//   };
//   React.useEffect(() => {
//     getAllUser();
//   }, []);

//   const userData = useSelector((state) => state.userReducer.userInfo);
//   const renderDataTable = () => {
//     return userData.map((user, index) => (
//       <tr key={index}>
//         <th scope="row">{user._id}</th>
//         <td>{user.username}</td>
//         <td>{user.email}</td>
//         <td>{user.password}</td>
//         <td>{user.role}</td>
//         <td>
//           <Space>
//             <Button type="primary" style={{ background: "#389e0d" }}>
//               Adding
//             </Button>
//             <Button
//               type="primary"
//               style={{ background: "#fa541c" }}
//               onClick={() => {
//                 handleDeleteUser(user._id);
//               }}
//             >
//               Delete
//             </Button>
//             <Button type="primary" style={{ background: "#001d66" }}>
//               Edit
//             </Button>
//           </Space>
//         </td>
//       </tr>
//     ));
//   };
//   return (
//     <>

//     </>
//   );
// };

// export default React.memo(Dashboard);
import React from "react";
import { Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const Dashboard = () => {
  return (
    <div>
      <Table
        columns={columns}
        pagination={{
          position: ["bottomRight"],
        }}
        dataSource={data}
        style={{padding: "0px"}}
      />
    </div>
  );
};

export default React.memo(Dashboard);
