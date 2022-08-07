import React, { useState } from "react";
import { Row, Col, Card, Button, Descriptions, Rate } from "antd";
import { Link } from "react-router-dom";
import useApi from "../../../hooks/useApi";
const RateComp = () => {
  const [value, setValue] = useState(3);

  return <Rate onChange={setValue} value={value} />;
};

function WorkSpaceCard({workspace}) {


  return (
    <>
      <Col
        md={8}
        className="mb-24"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          bordered={false}
          title={<h3 className="font-semibold m-0">{workspace.title}</h3>}
          className="header-solid h-full card-profile-information"
          bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          style={{
            height: 400,
            width: 380,
            borderRadius: 10,
            boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
          }}
        >
          <hr className="my-25" />
          <p className="text-dark">
            {" "}
            {workspace.description}
            {" "}
          </p>
          <Descriptions>
            <Descriptions.Item label="CEO" span={3}>
              {workspace.ceo}
            </Descriptions.Item>
            <Descriptions.Item label="Headquarters" span={3}>
              {workspace.headquarter}
            </Descriptions.Item>
          </Descriptions>
          <RateComp />
          <Row style={{
            margin : 5
          }}>
            <Col style={{marginLeft : "auto"}}>
              <Link to={`/services/${workspace.id}`}>
                <Button type="primary">See Services</Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
}

export default WorkSpaceCard;
