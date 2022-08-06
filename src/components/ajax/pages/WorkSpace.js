import { Layout, Row, Col, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import WorkSpaceCard from "../components/WorkSpaceCard";

function WorkSpace() {

  const user = useSelector((state)=> state.user.value);
  console.log("workspace",user);


  return (
    <>
        <CustomHeader />
        <Row style={{ margin: 60 }}>
          <WorkSpaceCard />
        </Row>
    </>
  );
}

export default WorkSpace;
