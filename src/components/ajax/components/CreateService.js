import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  fetchToken,
  getCurrentWorkSpace,
  getUser,
  setCurrentWorkspace,
} from "../../../utils/localStorage";
import { Layout, Button, Typography, Card, Form, Input } from "antd";
import useApi from "../../../hooks/useApi";
import Loading from "../components/Loading";

const { Title } = Typography;
const { Header, Content } = Layout;
const { TextArea } = Input;
const initialState = {
  title: "",
  description: "",
  price: "",
  workspace: getCurrentWorkSpace(),
};

function CreateService() {
  const [serviceData, setserviceData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const api = useApi();

  useEffect(() => {
    const token = fetchToken();
    if (!token) {
      history.push("/sign-in");
    }

    setserviceData({
        ...serviceData,
        workspace : getCurrentWorkSpace()
    })
  },[]);
  const handleChange = (e) => {
    const val = e.target.value;
    setserviceData({
      ...serviceData,
      [e.target.name]: val,
    });
  };

  const handleSubmit = async () => {
    console.log(serviceData);
    if (serviceData.title && serviceData.description && serviceData.price) {
      setIsLoading(true);
      const res = await api.post("workspaces/service", serviceData);
      if (res.status === 201) {
        setserviceData(initialState);
        setIsLoading(false);
        history.push("/projects")
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="layout-default ant-layout layout-sign-up">
        <Header>
          <div className="header-col header-brand">
            <h5>Ajax</h5>
          </div>
        </Header>

        <Content className="p-0">
          <div className="sign-up-header">
            <div className="content">
              <Title>Create Service</Title>
            </div>
          </div>

          <Card
            className="card-signup header-solid h-full ant-card pt-0"
            bordered="false"
          >
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
              className="row-col"
            >
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your Service Name!",
                  },
                ]}
              >
                <Input
                  name="title"
                  placeholder="Service name"
                  value={serviceData.title}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your Head Quarter!",
                  },
                ]}
              >
                <Input
                  value={serviceData.price}
                  name="price"
                  placeholder="Price"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item
                rules={[
                  { required: true, message: "Please input Description" },
                ]}
              >
                <TextArea
                  rows={4}
                  name={"description"}
                  placeholder={"Description"}
                  onChange={handleChange}
                  value={serviceData.description}
                />
              </Form.Item>

              <Form.Item style={{ display: "block" }}>
                <Button
                  style={{ width: "100%", borderRadius: 20, margin: "auto" }}
                  type="primary"
                  htmlType="submit"
                >
                  {isLoading ? <Loading /> : <>CREATE</>}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </div>
    </>
  );
}

export default CreateService;
