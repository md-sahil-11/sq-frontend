import { Layout, Row, Col, Space } from "antd";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import ServiceCard from '../components/ServiceCard'
function Services() {
  return (
    <>
      <CustomHeader />
      <Row style={{ margin: 30 , marginTop : 40}}>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
      </Row>
    </>
  );
}

export default Services;
