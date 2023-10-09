import React from "react";
import { Space, Table, Tag } from "antd";
import "../../../App.css";
import futbol from "../../../asset/iconos Deportes/0.png"
const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
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
      </>
    ),
  },
  {
    title: "",
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
    name: (
        <div className="flex items-center justify-between">
  <div>
    <img className="w-10" src={futbol} alt="" />
  </div>
  <div className="grid grid-cols-2 gap-1">
    <div className="text-gray-700 font-bold rounded ml-4">
      <span>Chivas</span>
    </div>
    <div className="text-gray-700 font-bold rounded mr-4">
      <span>100</span>
    </div>
    <div className="text-gray-700 font-bold rounded ml-4">
      <span>Atlas</span>
    </div>
    <div className="text-gray-700 font-bold rounded mr-4">
      <span>100</span>
    </div>
  </div>
</div>

    ),
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
];
const App = () => <Table bordered columns={columns} dataSource={data} />;
export default App;
