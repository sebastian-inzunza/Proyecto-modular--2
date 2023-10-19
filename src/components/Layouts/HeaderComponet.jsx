import React, { useState } from "react";
import { FaFutbol } from "react-icons/fa";
import { BiBasketball, BiTennisBall, BiBaseball, BiUser } from "react-icons/bi";
import { RiBoxingLine } from "react-icons/ri";
import { PiVolleyballLight } from "react-icons/pi";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  UserDeleteOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Row, Col, Avatar, Dropdown, Button } from "antd";
import ClockWithSeconds from "../ClockWithSeconds";
import ContentComponent from "./ContentComponent";
import DrawerComponent from "./DrawerComponent";
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
    label: <span>Cerrar sesión</span>,
  },
  {
    key: "2",
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
  const [collapsed, setCollapsed] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Fútbol");

  const handleMenuClick = (key) => {
    setSelectedMenuItem(key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
      className="md:block hidden"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: "#837f77" }}
      >
        <div className="m-1 py-7 rounded-md" style={{ background: "#272221" }} />
        <Menu
          style={{ background: "white" }}
          defaultSelectedKeys={["Fútbol"]}
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
        <Header style={{ background: "#272221" }} >
          <div className="flex items-center justify-between h-full">
            <div className="lg:hidden block">
            <DrawerComponent  />

            </div>

            <div className="text-white text-lg"> <span>Saldo <span className="text-green-500">$1000</span></span></div>
            <div className="flex items-center">
              <div className="hidden md:block">
              <ClockWithSeconds />

              </div>

             
            </div>
            <Dropdown menu={{ items }}>
              <Button
                type="primary"
                className="bg-white"
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
