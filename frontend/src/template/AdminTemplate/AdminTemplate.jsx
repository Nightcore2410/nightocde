import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ContactsFilled, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Button } from "react-bootstrap";
const { Header, Content, Footer, Sider } = Layout;

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };
  const navigate = useNavigate();
  const handleNavigate = (typeNavigate) => {
    if (typeNavigate === "user") navigate(`/admin/${typeNavigate}`);
    else navigate(`/admin/${typeNavigate}`);
  };
  const items = [
    getItem(
      "User Management",
      "sub1",
      <Button
        variant="success"
        size="lg"
        onClick={() => {
          handleNavigate("user");
        }}
      >
        <UserOutlined />
      </Button>
    ),

    getItem(
      "Tour Management",
      "9",
      <Button
        variant="success"
        size="lg"
        onClick={() => {
          handleNavigate("tour");
        }}
      >
        <ContactsFilled />
      </Button>
    ),
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
          items={items}
        />
      </Sider>
      <Layout className="site-layout" style={{ padding: 0 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
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
