import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: <a href="https://www.antgroup.com">CPU / Processor</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">Motherboard</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "RAM",
    key: "2",
  },
  {
    label: "Power Supply Unit",
    key: "3",
  },
  {
    label: "Storage DeviceRAM",
    key: "4",
  },
  {
    label: "Monitor",
    key: "5",
  },
  {
    type: "divider",
  },
  {
    label: "Others",
    key: "6",
  },
];

const NavDropDown = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <p className="text-sm">Categories</p>
          <DownOutlined className="text-xs" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default NavDropDown;
