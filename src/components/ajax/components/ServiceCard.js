import React, { useState } from "react";
import { Row, Col, Card, Button, Descriptions, Rate } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

function ServiceCard({service}) {
  return (
    <>
      <Col
        md={8}
        className="mb-24"
        style={{display: "flex", justifyContent: "center" }}
        
      >
        <Card
          title={<h2>{service.title}</h2>}
          bordered={false}
          style={{
            width: 350,
            borderRadius: 5,
          }}
        >
          <h1>$ {service.price}</h1>
          <p>{service.description}</p>
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
