import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ContactsFilled, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Content, Footer, Sider } = Layout;

const AdminTemplate = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);
  const getItem = (label, key, icon, children) => {
    return {
      key, 
      icon,
      children,
      label,
    };
  };
  const handleMenuItemClick = (key) => {
    if (key === "sub1") {
      navigate("/admin/user");
    } else if (key === "9") {
      navigate("/admin/tour");
    }
  };

  const items = [
    getItem("User Management", "sub1", <UserOutlined />),

    getItem("Tour Management", "9", <ContactsFilled />),
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
        padding: 0,
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items.map((item) => ({
            ...item,
            onClick: () => handleMenuItemClick(item.key), // Gọi hàm callback khi click vào menu item
          }))}
        />
      </Sider>
      <Layout className="site-layout" style={{ padding: 0 }}>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminTemplate;
