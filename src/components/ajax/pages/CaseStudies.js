import React from "react";
import CaseStudyCard from "../components/CaseStudyCard";
import { Row, Space } from "antd";
import CustomHeader from "../components/CustomHeader";
function CaseStudies() {
  return (
    <>
      <CustomHeader />
      <Row style={{display: "flex" , justifyContent : "center"}}>
        <CaseStudyCard />
      </Row>
    </>
  );
}

export default CaseStudies;
