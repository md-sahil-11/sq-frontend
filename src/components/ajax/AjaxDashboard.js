import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Col, Row, Typography } from "antd";
import { Layout, Drawer, Affix, Button } from "antd";
import Sidenav from "./Sidenav";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Project from "./pages/Projects";
import { useHistory } from "react-router-dom";

const { Header: AntHeader, Content, Sider } = Layout;

function AjaxDashboard({ children }) {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [sidenavColor, setSidenavColor] = useState("#0E1217");
  const [sidenavType, setSidenavType] = useState("#fafafa");
  const [fixed, setFixed] = useState(false);
  const { Title, Text } = Typography;
  const history = useHistory();

  const openDrawer = () => setVisible(!visible);
  const handleSidenavType = (type) => setSidenavType(type);
  const handleSidenavColor = (color) => setSidenavColor(color);
  const handleFixedNavbar = (type) => setFixed(type);

  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  useEffect(() => {
    if (!localStorage.hasOwnProperty("access_token")) history.push("/sign-in");
  }, []);

  const count = [
    {
      today: "Project in progress",
      title: "3",
      persent: "+30%",
      bnb: "bnb2",
    },
    {
      today: "Service request",
      title: "2",
      bnb: "bnb2",
    },
  ];

  return (
    <Layout
      className={`layout-dashboard ${
        pathname === "profile" ? "layout-profile" : ""
      } ${pathname === "rtl" ? "layout-dashboard-rtl" : ""}`}
      style={{ margin: 0 }}
    >
      <Drawer
        title={false}
        placement={placement === "right" ? "left" : "right"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key={placement === "right" ? "left" : "right"}
        width={250}
        className={`drawer-sidebar ${
          pathname === "rtl" ? "drawer-sidebar-rtl" : ""
        } `}
        style={{ background: "#0E1217", margin: 0 }}
      >
        <Layout
          className={`layout-dashboard ${
            pathname === "rtl" ? "layout-dashboard-rtl" : ""
          }`}
          style={{ margin: 0 }}
        >
          <Sider
            trigger={null}
            width={250}
            theme="light"
            style={{ background: sidenavType, margin: 0 }}
          >
            <Sidenav color={sidenavColor} />
          </Sider>
        </Layout>
      </Drawer>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        trigger={null}
        width={250}
        theme="light"
        className={`sider-primary ant-layout-sider-primary ${
          sidenavType === "#fff" ? "active-route" : ""
        }`}
        style={{ background: sidenavType }}
      >
        <Sidenav color={sidenavColor} />
      </Sider>
      <Layout>
        {fixed ? (
          <Affix>
            <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
              <Header
                onPress={openDrawer}
                name={pathname}
                subName={pathname}
                handleSidenavColor={handleSidenavColor}
                handleSidenavType={handleSidenavType}
                handleFixedNavbar={handleFixedNavbar}
              />
            </AntHeader>
          </Affix>
        ) : (
          <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
            <Header
              onPress={openDrawer}
              name={pathname}
              subName={pathname}
              handleSidenavColor={handleSidenavColor}
              handleSidenavType={handleSidenavType}
              handleFixedNavbar={handleFixedNavbar}
            />
          </AntHeader>
        )}
        <Content className="content-ant">
          <>
            {/* <Row className="rowgap-vbox" gutter={[24, 0]}>
              {count.map((c, index) => (
                <Col
                  key={index}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={6}
                  xl={6}
                  className="mb-24"
                >
                  <Card bordered={false} className="criclebox ">
                    <div className="number">
                      <Row align="middle" gutter={[24, 0]}>
                        <Col xs={18}>
                          <span>{c.today}</span>
                          <Title level={3}>
                            {c.title}{" "}
                            <small className={c.bnb}>{c.persent}</small>
                          </Title>
                        </Col>
                        <Col xs={6}>
                          <div className="icon-box">{c.icon}</div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row> */}
            {children}
          </>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AjaxDashboard;
