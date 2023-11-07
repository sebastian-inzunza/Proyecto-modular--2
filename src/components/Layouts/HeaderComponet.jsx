import React, { useEffect, useRef, useState } from "react";
import { FaFutbol } from "react-icons/fa";
import { BiBasketball, BiTennisBall, BiBaseball, BiUser } from "react-icons/bi";
import { RiBoxingLine } from "react-icons/ri";
import { PiVolleyballLight } from "react-icons/pi";
import Credit from "../../asset/holo.png";

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
  message,
  Modal,
  Form,
  Input,
  DatePicker,
} from "antd";
import ClockWithSeconds from "../ClockWithSeconds";
import ContentComponent from "./ContentComponent";
import DrawerComponent from "./DrawerComponent";
import axios from "axios";
import Swal from "sweetalert2";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const { MonthPicker } = DatePicker;
const menuItems = [
  { key: "Fútbol", label: "Fútbol", icon: <FaFutbol />, tipo: "futbol" },
  { key: "Baloncesto", label: "Baloncesto", icon: <BiBasketball /> },
  { key: "Tenis", label: "Tenis", icon: <BiTennisBall /> },
  { key: "Béisbol", label: "Béisbol", icon: <BiBaseball /> },
  { key: "Boxeo", label: "Boxeo", icon: <RiBoxingLine /> },
  { key: "Voleibol", label: "Voleibol", icon: <PiVolleyballLight /> },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Fútbol");

  const getCookieValue = (cookieName) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return null;
  };

  const handleLogout = () => {
    axios
      .get("https://server-modular-production.up.railway.app/logout")
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Success") {
          document.cookie = "token=; path=/;";
          document.cookie = "name=; path=/;";
          document.cookie = "balance=; path=/;";
          document.cookie = "level=; path=/;";
          document.cookie = "id=; path=/;";
          location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  const getPayMethod = (id) => {
    axios
      .get("https://server-modular-production.up.railway.app/credits?id=" + id)
      .then((res) => {
        if (res.status === 200) {
          setCredit(res.data.balance);
        } else {
          console.log("algo salio mal");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const id = getCookieValue("id");
    getPayMethod(id);
    setId(id);
  }, []);

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      handleLogout();
    } else {
      setvisible(true);
      console.log(pay);
    }
  };

  const handleCancel = () => {
    setvisible(false);
    formRef.current.resetFields();


  };

  const handleMenuClickTable = (key) => {
    setSelectedMenuItem(key);
  };

  const items = [
    {
      label: "Cerrar sesion",
      key: "1",
    },
    {
      label: "Saldo",
      key: "2",
    },
  ];

  const items2 = [
    {
      label: "Apuestas",
      key: "1",
    },
   
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const menuProps2 = {
    items2,
    onClick: handleMenuClick,
  };

  const handleDateChange = (e) => {
    const inputDate = e.target.value;

    // Verifica si la longitud del texto es igual a 2 para agregar "/" automáticamente
    if (inputDate.length === 2 && !inputDate.includes("/")) {
      setDateExpire(inputDate + "/");
    } else {
      setDateExpire(inputDate);
    }
  };

  const [visible, setvisible] = useState(false);
  const [id, setId] = useState(0);
  const [pay, setPay] = useState(false);
  const [credit, setCredit] = useState();

  const onFinish = (values) => {
    console.log("Valores del formulario:", values);
    if (values) {
      console.log("entre");
      const data = {
        userId: id,
        saldo: parseInt(values.saldo) + parseInt(credit),
      };

      console.log(data);
      axios
        .put("https://server-modular-production.up.railway.app/actualizarMetodoPago", data)
        //  .post("https://server-modular-production.up.railway.app/login", values)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setvisible(false);
            formRef.current.resetFields();
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    }

    console.log(values);
  };
  const formRef = useRef();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="md:block hidden"
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
      </Sider>
      <Layout style={{ background: "#b2ada7" }}>
        <Header style={{ background: "#272221" }}>
          <div className="flex items-center justify-between h-full">
            <div className="md:hidden block">
              <DrawerComponent handleMenuClickTable={handleMenuClickTable} />
            </div>

            <div className="text-white text-lg">
              <span>
                Saldo <span className="text-green-500">${credit}</span>
              </span>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <ClockWithSeconds />
              </div>
            </div>
            <Dropdown menu={menuProps}>
              <Button className="bg-white" icon={<UserOutlined />}></Button>
            </Dropdown>

            <Dropdown menu={menuProps2}>
              <Button className="bg-white" icon={<UserOutlined />}></Button>
            </Dropdown>
          </div>
        </Header>
        <ContentComponent selectedMenuItem={selectedMenuItem} />
        <Modal visible={visible} onCancel={handleCancel} footer={false}>
          <div className="m-3">
            <img src={Credit} alt="" />
            <Form
              ref={formRef}
              className="mt-10"
              name="creditCardForm"
              onFinish={onFinish}
              labelAlign="top" // Esto coloca las etiquetas arriba de los campos
            >
              <Row gutter={[8, 8]}>
                <Col span={16}>
                  <Form.Item
                    name="cardNumber"
                    rules={[
                      {
                        required: true,
                        message: "Número",
                      },
                      {
                        pattern: /^[0-9]*$/, // Patrón para aceptar solo números
                        message: "Ingrese solo números",
                      },
                      {
                        max: 16, // Patrón para aceptar solo números
                        message: "Solo 16 digitos",
                      },
                    ]}
                  >
                    <Input placeholder="1234 5678 9012 3456" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="expirationDate"
                    rules={[
                      {
                        required: true,
                        message: "Fecha",
                      },
                    ]}
                  >
                    <MonthPicker 
                      placeholder="Fecha de Expiración"
                      format="MM/YY"
                    />
                  </Form.Item>
                </Col>

                <Col span={17}>
                  <Form.Item
                    name="saldo"
                    rules={[
                      {
                        required: true,
                        message: "Cantidad",
                      },
                    ]}
                  >
                    <Input placeholder="Cantidad a depositar" />
                  </Form.Item>
                </Col>

                <Col span={7}>
                  <Form.Item
                    name="cvv"
                    rules={[
                      {
                        required: true,
                        message: "CVV",
                      },
                    ]}
                  >
                    <Input placeholder="CVV" />
                  </Form.Item>
                </Col>
              </Row>
              <div className="flex justify-end mt-2">
                <Form.Item>
                  <button
                    className="bg-blue-700 px-4  py-2 rounded-md text-xl text-white hover:bg-blue-400 hover:text-black"
                    htmlType="submit"
                  >
                    Enviar
                  </button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </Modal>
      </Layout>
    </Layout>
  );
};

export default App;
