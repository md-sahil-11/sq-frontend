import React, { useState } from "react";
import { Link , useHistory} from "react-router-dom";
import { useDispatch , useSelector  } from "react-redux";
import { setUser } from "../redux/states/user";


import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import signinbg from "../assets/images/img-signin.jpg";
import useApi from "../hooks/useApi";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Header, Content } = Layout;
const initialState = {
  email: "",
  password: "",
};
export default function SignIn() {
  const [userData, setuserData] = useState(initialState);
  const dispactch = useDispatch()
  const api = useApi();

  const user = useSelector((state)=> state.user.value);
  const history = useHistory();


  console.log("signin",user);

  const routeToWorkSpace = ()=>{
    const path = '/workspace'
    history.push(path)
  }
  const handleChange = (e) => {
    const val = e.target.value;
    setuserData({
      ...userData,
      [e.target.name]: val,
    });
  };

  const handleSubmit = async ()=>{
    if(userData.email && userData.password){
      const res = await api.post("users/account/login",userData);
      if(res.data.success){
        setuserData(initialState)
        dispactch(setUser(res.data.data));
        localStorage.setItem("access_token",res.data.data.token)
        routeToWorkSpace();
      }
    }
  }
  return (
    <>
      <Layout className="layout-default layout-signin">
        <Header>
          <div className="header-col header-brand">
            <h5>Ajax</h5>
          </div>
        </Header>
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">Sign In</Title>
              <Form
                layout="vertical"
                className="row-col"
                onFinish={handleSubmit}
              >
                <Form.Item
                  className="username"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
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
                  className="username"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={userData.password}
                  />
                </Form.Item>

                <Form.Item
                  name="remember"
                  className="aligin-center"
                  valuePropName="checked"
                >
                  <Switch defaultChecked onChange={onChange} />
                  Remember me
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    SIGN IN
                  </Button>
                </Form.Item>
                <p className="font-semibold text-muted">
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="text-dark font-bold">
                    Sign Up
                  </Link>
                </p>
              </Form>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}
