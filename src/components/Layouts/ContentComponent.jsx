import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Tablecomponent from "./TablesSport/Tablecomponent";
const { Header, Content, Footer, Sider } = Layout;

const ContentComponent = ({ selectedMenuItem }) => {
  return (
    <Content
      style={{
        margin: "0 16px",
      }}
    >
      <div className="flex justify-between bg-slate-900/70 py-2 mt-5 ">
        <div className=" text-lg font-bold m-2 text-gray-200 uppercase bebas-neue-font">{selectedMenuItem} Liga Mexicana</div>
        <div className="flex justify-end bebas-neue-font">
          <button className="bg-red-600 mx-2 px-3 text-lg font-bold  rounded-md text-white">
            En vivo
          </button>
          <button className="bg-gray-800 text-gray-400 hover:bg-red-600 hover:text-white mx-2 px-3  text-lg   transition ease-in duration-300 font-bold  rounded-md ">
           Evento del dia
          </button>
          <button className="bg-gray-800 mx-2 px-3 hover:bg-red-600 hover:text-white  text-lg   transition ease-in duration-300 font-bold rounded-md text-gray-400">
            Historial
          </button>
        </div>
      </div>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "white",
        }}
      >
        <Tablecomponent />
      </div>
    </Content>
  );
};

export default ContentComponent;
