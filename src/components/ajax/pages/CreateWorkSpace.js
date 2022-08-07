import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  fetchToken,
  getUser,
  setCurrentWorkspace,
} from "../../../utils/localStorage";
import {
  Layout,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
  message,
} from "antd";
import useApi from "../../../hooks/useApi";
import Loading from "../components/Loading";

const { Title } = Typography;
const { Header, Content } = Layout;
const { TextArea } = Input;
const initialState = {
  title: "",
  description: "",
  ceo: "",
  headquarter: "",
  creator: JSON.parse(getUser())?.id
};

function CreateWorkSpace() {
  const [userData, setuserData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const api = useApi();

  useEffect(() => {
    const token = fetchToken();
    if (!token) {
      history.push("/sign-in");
    }
  });
  const handleChange = (e) => {
    const val = e.target.value;
    setuserData({
      ...userData,
      [e.target.name]: val,
    });
  };


  const handleSubmit = async () => {
    if (
      userData.title &&
      userData.headquarter &&
      userData.ceo &&
      userData.description
    ) {
      setIsLoading(true);
      const res = await api.post("workspaces/dashboard", userData);
      if (res.status === 201) {
        setuserData(initialState);
        // console.log(res.data);
        setCurrentWorkspace(res.data.id)
        setIsLoading(false);
        history.goBack();
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
              <Title>Create WorkSpace</Title>
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
                    message: "Please input your Company name!",
                  },
                ]}
              >
                <Input
                  name="title"
                  placeholder="Company name"
                  value={userData.title}
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
                  value={userData.headquarter}
                  name="headquarter"
                  placeholder="Head Quarter"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item
                rules={[
                  { required: true, message: "Please input your CEO name!" },
                ]}
              >
                <Input
                  name="ceo"
                  placeholder="CEO"
                  onChange={handleChange}
                  value={userData.ceo}
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
                  value={userData.description}
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

export default CreateWorkSpace;
