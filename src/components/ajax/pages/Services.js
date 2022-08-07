import { Layout, Row, Col, Space , Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import CustomHeader from "../components/CustomHeader";
import ServiceCard from "../components/ServiceCard";
import Loading from "../components/Loading";
import ProjectDetails from "../components/ProjectDetails";
function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [serviceID , setServiceID] = useState("");
  const { workspaceid } = useParams();
  const api = useApi();

  const showModal = () => {
    setVisible(true);
  };
  useEffect(() => {
    const url = `/workspaces/dashboard/${workspaceid}/services`;
    setIsLoading(true);
    api
      .get(url)
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          setServices(res.data.results);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const RenderServices = () => {
    return services.map((service,index) => {
      return <ServiceCard service={service} key={index} setServiceID={setServiceID} showModel={showModal}/>;
    });
  };

  return (
    <>
      <CustomHeader />
      <Row style={{ margin: 30, marginTop: 40 }}>
        {isLoading ? <Loading /> : <RenderServices />}
      </Row>
      <ProjectDetails setVisible={setVisible} visible={visible} serviceid={serviceID}/>
    </>
  );
}

export default Services;
