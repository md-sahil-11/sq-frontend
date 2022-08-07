import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function Loading() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: "black",

      }}
      spin
    />
  );

  return (
    <div style={{
        display : "flex",
        width : "100%",
        justifyContent : "center",
        alignItems : "center"
    }}>
      <Spin indicator={antIcon} />
    </div>
  );
}

export default Loading;
