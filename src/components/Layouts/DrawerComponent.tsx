import React, { useState } from "react";
import { Button, ConfigProvider, Drawer, Menu, Space } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import { FaFutbol } from "react-icons/fa";
import { BiBasketball, BiTennisBall, BiBaseball, BiUser } from "react-icons/bi";
import { RiBoxingLine } from "react-icons/ri";
import { PiVolleyballLight } from "react-icons/pi";


const DrawerComponent = ({handleMenuClickTable}) => {
  const [open, setOpen] = useState([false, false]);


  const toggleDrawer = (idx, target) => {
    setOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  
  const menuItems = [
    { key: "Fútbol", label: <span className="text-2xl">Fútbol</span>, icon: <FaFutbol size={32} />, tipo: "futbol" },
    { key: "Baloncesto", label: <span className="text-2xl">Baloncesto</span>, icon: <BiBasketball  size={32} /> },
    { key: "Tenis", label: <span className="text-2xl">Tenis</span>, icon: <BiTennisBall  size={32} /> },
    { key: "Béisbol", label: <span className="text-2xl">Béisbol</span>, icon: <BiBaseball  size={32} /> },
    { key: "Boxeo", label: <span className="text-2xl">Boxeo</span>, icon: <RiBoxingLine  size={32} /> },
    { key: "Voleibol", label: <span className="text-2xl">Voleibol</span>, icon: <PiVolleyballLight  size={32} /> },
  ];
  return (
    <>
      <Button type="primary" onClick={() => toggleDrawer(0, true)} icon={<MenuOutlined className="text-6xl" />} />

      <Drawer
        placement="left"
        onClose={() => toggleDrawer(0, false)}
        open={open[0]}
      >
          <Menu
          style={{ background: "white" }}
          defaultSelectedKeys={["Fútbol"]}
          mode="inline"
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => handleMenuClickTable(item.key)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      
      </Drawer>
   
    </>
  );
};
export default DrawerComponent;
