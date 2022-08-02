import { Layout, Row, Col, Space } from "antd";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import TabListComp from "../components/TabList";
import WorkSpaceCard from "../components/WorkSpaceCard";

function WorkSpace() {
  return (
    <>
        <CustomHeader />
        <Row style={{ margin: 60 }}>
          <WorkSpaceCard />
          <WorkSpaceCard />
          <WorkSpaceCard />
        </Row>
    </>
  );
}

export default WorkSpace;
