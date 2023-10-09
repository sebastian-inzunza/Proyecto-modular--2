import React, { useState } from "react";
import { BiUser, BiBaseball, BiBasketball, BiTennisBall } from "react-icons/bi";
import { FaFutbol } from "react-icons/fa";
import { RiBoxingLine } from "react-icons/ri";
import { PiVolleyballLight } from "react-icons/pi";

import "animate.css";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  UserDeleteOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Row,
  Col,
  Avatar,
  Dropdown,
  Button,
} from "antd";
import ClockWithSeconds from "../ClockWithSeconds";
import ContentComponent from "./ContentComponent";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  {
    key: "1",
    label: <span>Cerrar sesion</span>,
  },
  {
    key: "1",
    label: <span>Saldo</span>,
  },
];

const menuItems = [
    { key: "Fútbol", label: "Fútbol", icon: <FaFutbol /> },
    { key: "Baloncesto", label: "Baloncesto", icon: <BiBasketball /> },
    { key: "Tenis", label: "Tenis", icon: <BiTennisBall /> },
    { key: "Béisbol", label: "Béisbol", icon: <BiBaseball /> },
    { key: "Boxeo", label: "Boxeo", icon: <RiBoxingLine /> },
    { key: "Voleibol", label: "Voleibol", icon: <PiVolleyballLight /> },
  ];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [selectedMenuItem, setSelectedMenuItem] = useState("Fútbol");

  const handleMenuClick = (key) => {
    setSelectedMenuItem(key);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: "#837f77" }}
      >
        <div
          className="m-1 py-7 rounded-md"
          style={{ background: "#272221" }}
        />
          <Menu
          style={{ background: "white" }}
          defaultSelectedKeys={["futbol"]}
          mode="inline"
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => handleMenuClick(item.key)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout style={{ background: "#b2ada7" }}>
        <Header
          style={{
            padding: "8px",
            background: "#272221",
          }}
        >
          <div className="flex items-center justify-between h-full">
            <div></div>

            <div className="flex items-center">
              <ClockWithSeconds />
            </div>
            <Dropdown
              menu={{
                items,
              }}
              placement="left"
            >
              <Button
                type="primary"
                onClick={handleMenuClick}
                className="bg-white animate__animated animate__bounce"
                shape="round"
                icon={<BiUser className="text-black" />}
                size="large"
              />
            </Dropdown>
          </div>
        </Header>
        <ContentComponent selectedMenuItem={selectedMenuItem} />
      </Layout>
    </Layout>
  );
};
export default App;
