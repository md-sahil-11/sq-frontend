import React from "react";
import SocialMediaCard from "../components/SocialMediaCard";
import { Button } from "antd";
import { PlusCircleOutlined , SendOutlined} from "@ant-design/icons";
import { Col, Row , Input , Tooltip} from "antd";
function Social() {
  return (
    <>
      <Row style={{ margin: 30, marginTop: 10 }}>
        <SocialMediaCard />
      </Row>
      <Row
        style={{
          position: "sticky",
          bottom: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col
          style={{
            fontSize: 40,
            padding : 30,
            width : "100%"
          }}
        >
          
          <Input
            placeholder="Write Blog"
            style={{paddingLeft : 10}}
            prefix={<PlusCircleOutlined style={{ cursor: "pointer" , fontSize : 27 , marginRight : 10}}/>}
            suffix={
                <SendOutlined style={{cursor : "pointer"}} />
            }
          />
        </Col>
      </Row>
    </>
  );
}

export default Social;
