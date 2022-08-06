import React, { useEffect, useState } from "react";
import SocialMediaCard from "../components/SocialMediaCard";
import { PlusCircleOutlined, SendOutlined } from "@ant-design/icons";
import { Col, Row, Input, Tooltip } from "antd";
import { Button, Modal } from "antd";
import PostForm from "../components/PostForm";
function Social() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const PostPopup = () => {
    return (
      <>
        <Modal
          title=""
          visible={visible}
          okText="Post"
          cancelText="cancel"
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <PostForm />
        </Modal>
      </>
    );
  };

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
            padding: 30,
            width: "100%",
          }}
        >
          <Input
            placeholder="Write Blog"
            style={{ paddingLeft: 10 }}
            prefix={
              <PlusCircleOutlined
                style={{ cursor: "pointer", fontSize: 27, marginRight: 10 }}
                onClick={showModal}
              />
            }
            suffix={<SendOutlined style={{ cursor: "pointer" }} />}
          />
        </Col>
        <PostPopup />
      </Row>
    </>
  );
}

export default Social;
