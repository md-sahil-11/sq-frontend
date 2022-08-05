import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import {
  Layout,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
} from "antd";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const initialState = {
  firstname: "",
  email: "",
  password: "",
}
function SignUp(){

  const [userData, setuserData] = useState(initialState);

  const api = useApi();
  const handleChange = (e) => {
    const val = e.target.value;
    setuserData({
      ...userData,
      [e.target.name]: val,
    });
  };

  const handleSubmit = async ()=>{
    if(userData.firstname && userData.email && userData.password){
      const res = await api.post("users/account/register",userData);
      setuserData(initialState)
      console.log(res.data.data);
    }
  }

  const onFinish = (values) => {
    console.log("Success:", values);
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
              <Title>Sign Up</Title>
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
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input value={userData.firstname} name="firstname" placeholder="Name" onChange={handleChange} />
              </Form.Item>

              <Form.Item
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={userData.password}
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>
                  I agree the{" "}
                  <a href="#pablo" className="font-bold text-dark">
                    Terms and Conditions
                  </a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                >
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
            <p className="font-semibold text-muted text-center">
              Already have an account?{" "}
              <Link to="/sign-in" className="font-bold text-dark">
                Sign In
              </Link>
            </p>
          </Card>
        </Content>
      </div>
    </>
  );
};


export default SignUp