import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items = [
  {
    label: <Link href="https://www.antgroup.com">CPU / Processor</Link>,
    key: "0",
  },
  {
    label: <Link href="https://www.aliyun.com">Motherboard</Link>,
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
      <button onClick={(e) => e.preventDefault()}>
        <Space>
          <p className="text-sm">Categories</p>
          <DownOutlined className="text-xs" />
        </Space>
      </button>
    </Dropdown>
  );
};

export default NavDropDown;
