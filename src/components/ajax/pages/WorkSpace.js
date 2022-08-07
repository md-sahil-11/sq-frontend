import { Layout, Row, Col, Space } from "antd";
import React, { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import CustomHeader from "../components/CustomHeader";
import WorkSpaceCard from "../components/WorkSpaceCard";
import Loading from "../components/Loading";
function WorkSpace() {
  const [workspaces, setWorkspaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const api = useApi();

  useEffect(() => {
    const fetchAllWorkSpace = async () => {
      const res = await api.get("workspaces/dashboard/all");
      return res.data.results;
    };
    setIsLoading(true);
    fetchAllWorkSpace()
      .then((res) => {
        setIsLoading(false);
        setWorkspaces(res);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const renderWorkSpaces = workspaces ? (
    workspaces.map((workspace, index) => {
      return <WorkSpaceCard workspace={workspace} key={index} />;
    })
  ) : (
    <></>
  );

  return (
    <>
      <CustomHeader />
      <Row style={{ margin: 60 }}>
        {isLoading ? <Loading /> : renderWorkSpaces}
      </Row>
    </>
  );
}

export default WorkSpace;
