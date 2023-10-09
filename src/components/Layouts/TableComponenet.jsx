import React from "react";
import { Space, Table, Tag } from "antd";
import chivas from "../../asset/Chivas.svg"
function TableComponent() {
  const columns = [
    {
      title: "Equipo Local",
      align: "center",
      dataIndex: "local",
      key: "local",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Equipo Visitante",
      dataIndex: "visitante",
      align: "center",
      key: "visitante",
    },
    {
      title: "Empate",
      dataIndex: "empate",
      align: "center",

      key: "empate",
    },

    {
      title: "Action",
      key: "action",
      align: "center",

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
      // Centra los datos en esta columna
      local: (
        <div className="flex justify-center">
          <div className="w-[60px] ">
            <div className="flex items-center">
            <div className="mr-2">
            <span className=" font-bold">Chivas</span>
            <img src={chivas} className="" alt="" />
            </div>
            <span className="text-lg text-green-500"> +120</span>

            </div>
          



          </div>
        </div>
      ),

      visitante: (
        <div className="flex justify-center">
          <div className="w-[60px] ">
            <div className="flex items-center">
            <div className="mr-2">
            <span className=" font-bold">Chivas</span>
            <img src={chivas} className="" alt="" />
            </div>
            <span className="text-lg text-green-500"> +120</span>

            </div>
          



          </div>
        </div>
      ),

      empate: (
        <div className="flex justify-center">
        <div className="w-[60px] ">
          <div className="flex items-center">
          <div className="mr-2">
          <span className=" font-bold">Chivas</span>
          <img src={chivas} className="" alt="" />
          </div>
          <span className="text-lg text-green-500"> +120</span>

          </div>
        



        </div>
      </div>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} />;
}

export default TableComponent;
