import React, { useState } from "react";
import { Row, Col, Card, Button, Descriptions, Rate } from "antd";

const RateComp = () => {
  const [value, setValue] = useState(3);

  return <Rate onChange={setValue} value={value} />;
};

function WorkSpaceCard() {
  return (
    <>
      <Col md={8} className="mb-24" style={{display : "flex" , justifyContent : "center"}}>
        <Card
          bordered={false}
          title={<h6 className="font-semibold m-0">Profile Information</h6>}
          className="header-solid h-full card-profile-information"
          bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          style={{ height : 400 , width : 380}}
        >
          <hr className="my-25" />
          <p className="text-dark">
            {" "}
            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
            no. If two equally difficult paths, choose the one more painful in
            the short term (pain avoidance is creating an illusion of equality).{" "}
          </p>
          <Descriptions>
            <Descriptions.Item label="CEO" span={3}>
              Sarah Emily Jacob
            </Descriptions.Item>
            <Descriptions.Item label="Headquarters" span={3}>
              (44) 123 1234 123
            </Descriptions.Item>
          </Descriptions>
          <RateComp />
        </Card>
      </Col>
    </>
  );
}

export default WorkSpaceCard;
