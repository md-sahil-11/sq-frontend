import React, { useEffect, useState } from "react";
import { Link , useHistory} from "react-router-dom";


import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
  Spin
} from "antd";
import signinbg from "../assets/images/img-signin.jpg";
import { LoadingOutlined } from "@ant-design/icons";
import useApi from "../../../hooks/useApi";
import { fetchToken , setTokenLocal , setUserLocal} from "../../../utils/localStorage";
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
  const [isLoading , setIsLoading] = useState(false);
  const api = useApi();
  const history = useHistory();

  useEffect(()=>{
    const token = fetchToken();
    console.log(history.length);
    if(token){
      history.push("/workspace")
    }
  },[])

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color : "white"
      }}
      spin
    />
  );

  
  const handleChange = (e) => {
    const val = e.target.value;
    setuserData({
      ...userData,
      [e.target.name]: val,
    });
  };

  const handleSubmit = async ()=>{
    if(userData.email && userData.password){
      setIsLoading(true)
      const res = await api.post("users/account/login",userData);
      if(res.data.success){
        setuserData(initialState)
        const userString = JSON.stringify(res.data.data);
        setUserLocal(userString)
        setTokenLocal(res.data.data.token);
        history.goBack()
      }
      setIsLoading(false);

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
                    type={"password"}
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
                    { isLoading ? <Spin indicator={antIcon}/> : <>SIGN IN</>}
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
