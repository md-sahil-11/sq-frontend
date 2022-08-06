import React, { useState } from "react";
import { Row, Col, Card, Button, Descriptions, Rate } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const requests = [
  "Description1",
  "Description2",
  "Description3",
  "Description4",
  "Description5",
];

function ServiceCard() {
  const renderRequests = requests.map((request, index) => {
    return (
      <p span={3}>
        {index + 1} - {request}
      </p>
    );
  });
  return (
    <>
      <Col
        md={8}
        className="mb-24"
        style={{display: "flex", justifyContent: "center" }}
        
      >
        <Card
          title={<h2>Web Development</h2>}
          bordered={false}
          style={{
            width: 350,
            borderRadius: 5,
          }}
        >
          <h1>$ 30,000</h1>
          {renderRequests}
          <br />
          <div style={{display : "flex" , justifyContent : "flex-end"}}>
            <Button type="primary" style={{ width: 70 }}>
              BUY <ArrowRightOutlined />
            </Button>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default ServiceCard;
