import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
  Breadcrumb,
  Badge,
  Dropdown,
  List,
  Input,
  Drawer,
  Switch,
  Divider
} from "antd";
import styled from "styled-components";

import RightDrawer from "./RightDrawer";
import convesionImg from "../assets/images/face-3.jpg";

const TaskTable = ({ columns, data }) => {
  const [visible, setVisible] = useState(false);
  const onChange = () => console.log("");
  const { Title, Text } = Typography;
  //comment data
  const chatdata = [
    {
      title: "Sophie B.",
      avatar: convesionImg,
      description:
        "Hi! I need more information hjwbjc bjcabj Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, vel sit quibusdam voluptatum unde cumque ipsam deleniti perspiciatis similique natus consectetur, doloribus veniam. Esse ex sunt rerum. Ad, voluptate in?",
    },
    {
      title: "Anne Marie",
      avatar: convesionImg,
      description: "Awesome work, can you…",
    },
    {
      title: "Sophie B.",
      avatar: convesionImg,
      description:
        "Hi! I need more information hjwbjc bjcabj Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, vel sit quibusdam voluptatum unde cumque ipsam deleniti perspiciatis similique natus consectetur, doloribus veniam. Esse ex sunt rerum. Ad, voluptate in?",
    },
    {
      title: "Anne Marie",
      avatar: convesionImg,
      description: "Awesome work, can you…",
    },
  ];
  return (
    <Card
      bordered={false}
      className="criclebox tablespace mb-24"
      title="Name"
      extra={
        <>
          <Radio.Group onChange={onChange} defaultValue="a">
            <Radio.Button value="a">All</Radio.Button>
            <Radio.Button value="b">ONLINE</Radio.Button>
          </Radio.Group>
        </>
      }
    >
      <div className="table-responsive">
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => setVisible(true),
            };
          }}
          columns={columns}
          dataSource={data}
          pagination={false}
          className="ant-border-space"
        />
        <RightDrawer visible={visible} setVisible={setVisible}>
          <div layout="vertical">
            <div className="header-top">
              <Title level={4}>
                Task
                <Text className="subtitle">Pending</Text>
              </Title>
            </div>
            <br />
            <div className="sidebarnav-color mb-2">
              <Title level={5}>Assignee</Title>
              <Text>Choose between 2 different sidenav types.</Text>
              <Title level={5}>Assignee</Title>
              <Text>Choose between 2 different sidenav types.</Text>
              <Title level={5}>Assignee</Title>
              <Text>Choose between 2 different sidenav types.</Text>
            </div>
            <Divider type='horizontal'/>
            <Row>
              <Col span={24} className="mb-24">
                <Title level={4}>Discussion</Title>
                  <List
                    itemLayout="horizontal"
                    dataSource={chatdata}
                    split={false}
                    className="conversations-list"
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              shape="square"
                              size={28}
                              src={item.avatar}
                            />
                          }
                          title={item.title}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                  />
              </Col>
            </Row>
          </div>
        </RightDrawer>
      </div>
    </Card>
  );
};

export default TaskTable;
