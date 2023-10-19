import React, { useState } from "react";
import { Button, ConfigProvider, Drawer, Space } from "antd";
import { MenuOutlined } from '@ant-design/icons';

const DrawerComponent = () => {
  const [open, setOpen] = useState([false, false]);

  const toggleDrawer = (idx, target) => {
    setOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  return (
    <>
      <Button type="primary" onClick={() => toggleDrawer(0, true)} icon={<MenuOutlined className="text-6xl" />} />

      <Drawer
        title="Basic Drawer"
        placement="left"
        footer="Footer"
        onClose={() => toggleDrawer(0, false)}
        open={open[0]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <ConfigProvider drawer={{}}>
        <Drawer
          title="Basic Drawer"
          placement="right"
          footer="Footer"
          onClose={() => toggleDrawer(1, false)}
          open={open[1]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </ConfigProvider>
    </>
  );
};
export default DrawerComponent;
