import { Select } from "antd";
import React, { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import { setCurrentWorkspace } from "../../../utils/localStorage";
const { Option } = Select;

function SelectWorkspace({ setCurrWorkspace }) {
  const [myWorkspaces, setMyWorkspace] = useState([]);
  const api = useApi();

  useEffect(() => {
    api.get("/users/account/workspaces").then((res) => {
      setMyWorkspace(res.data.results);
    });
  }, []);

  const handleChange = (value) => {
    setCurrentWorkspace(value);
    setCurrWorkspace(value);
  };

  const RenderMyWorkSpaces = myWorkspaces ? (
    myWorkspaces.map((workspace) => {
      return (
        <Option key={workspace.id} value={workspace.id}>
          {workspace.title}
        </Option>
      );
    })
  ) : (
    <></>
  );

  return (
    <>
      <Select
        defaultValue={"Select Workspace"}
        style={{
          width: "100%",
        }}
        onChange={handleChange}
      >
        {RenderMyWorkSpaces}
      </Select>
    </>
  );
}

export default SelectWorkspace;
