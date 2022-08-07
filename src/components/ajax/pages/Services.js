import { Layout, Row, Col, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import CustomHeader from "../components/CustomHeader";
import ServiceCard from "../components/ServiceCard";
import Loading from "../components/Loading";
function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { workspaceid } = useParams();
  const api = useApi();

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
    return services.map((service) => {
      return <ServiceCard service={service} />;
    });
  };

  return (
    <>
      <CustomHeader />
      <Row style={{ margin: 30, marginTop: 40 }}>
        {isLoading ? <Loading /> : <RenderServices />}
      </Row>
    </>
  );
}

export default Services;
