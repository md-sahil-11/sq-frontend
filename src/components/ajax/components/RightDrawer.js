import React from "react";
import { Drawer } from "antd";

const RightDrawer = ({ visible, setVisible, children }) => {
  const hideDrawer = () => setVisible(false);
  const placement = "right";

  return (
    <Drawer
      className="settings-drawer"
      mask={true}
      width={360}
      onClose={hideDrawer}
      placement={placement}
      visible={visible}
    >
        { children }
    </Drawer>
  );
};

export default RightDrawer;
