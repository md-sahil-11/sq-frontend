import { Select } from "antd";
import React from "react";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectWorkppace = () => (
  <>
      <Select
        defaultValue="Select Workspace"
        style={{
          width: "100%",
        }}
        onChange={handleChange}
      >
        <Option value="lucy">Lucy</Option>
        <Option value="jack">Jack</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
  </>
);

export default SelectWorkppace;
