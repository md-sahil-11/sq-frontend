import { Menu, Button } from "antd";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { getCurrentWorkSpace } from "../../utils/localStorage";
import SelectWorkspace from "./components/SelectWorkspace";
import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import {
  checkRole,
  CLIENT,
  EMPLOYEE,
  LEADER,
  MANAGER,
} from "../../utils/roles";
import {
  BookOutlined,
  NotificationOutlined,
  ProfileOutlined,
  ProjectOutlined,
  SendOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
{
  /* 
          Projects - C,L,M 
          Tasks - E,L,M
          Transactions - C,L,M
          Notifications - All
          Posts - E,M,L,
          Training - E , M , L
          leader , manager , employee , client
        */
}

const menu_item_users = {
  project_user: [CLIENT, LEADER, MANAGER],
  profile_user: [EMPLOYEE, LEADER, CLIENT, MANAGER],
  tasks_user: [EMPLOYEE, LEADER, MANAGER],
  transactions_user: [CLIENT, LEADER, MANAGER],
  notifications: [EMPLOYEE, MANAGER, CLIENT, LEADER],
  posts: [EMPLOYEE, MANAGER, LEADER],
  training: [EMPLOYEE, MANAGER, LEADER],
};

function Sidenav({ color }) {
  const [currWorkSpace, setCurrWorkspace] = useState(getCurrentWorkSpace());
  const [user_type, setUserType] = useState(null);
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");
  const api = useApi();

  useEffect(() => {
    api
      .get("/workspaces/dashboard/" + currWorkSpace + "/get_user_type")
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setUserType(res.data.user_type);
        }
      });
  }, [currWorkSpace]);

  return (
    <>
      <div className="brand">
        <SelectWorkspace
          setCurrWorkspace={setCurrWorkspace}
          user_type={user_type}
        />
      </div>
      <hr />
      <Menu theme="dark" mode="inline">
        {checkRole(menu_item_users.project_user, user_type) ? (
          <Menu.Item key="1">
            <NavLink to="/projects">
              <span
                className="icon"
                style={{
                  background: page === "projects" ? color : "",
                }}
              >
                <ProjectOutlined />
              </span>
              <span className="label">Projects</span>
            </NavLink>
          </Menu.Item>
        ) : (
          <></>
        )}
        {checkRole(menu_item_users.tasks_user, user_type) ? (
          <Menu.Item key="2">
            <NavLink to="/tasks">
              <span
                className="icon"
                style={{
                  background: page === "tasks" ? color : "",
                }}
              >
                <BookOutlined />
              </span>
              <span className="label">Tasks</span>
            </NavLink>
          </Menu.Item>
        ) : (
          <></>
        )}
        {checkRole(menu_item_users.transactions_user, user_type) ? (
          <Menu.Item key="3">
            <NavLink to="/transactions">
              <span
                className="icon"
                style={{
                  background: page === "transactions" ? color : "",
                }}
              >
                <TransactionOutlined />
              </span>
              <span className="label">Transactions</span>
            </NavLink>
          </Menu.Item>
        ) : (
          <></>
        )}

        <Menu.Item key="4">
          <NavLink to="/profile">
            <span
              className="icon"
              style={{
                background: page === "profile" ? color : "",
              }}
            >
              <ProfileOutlined />
            </span>
            <span className="label">Profile</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="5">
          <NavLink to="/notifications">
            <span
              className="icon"
              style={{
                background: page === "notifications" ? color : "",
              }}
            >
              <NotificationOutlined />
            </span>
            <span className="label">Notifications</span>
          </NavLink>
        </Menu.Item>
        {checkRole(menu_item_users.posts, user_type) ? (
          <Menu.Item key="6">
            <NavLink to="/social">
              <span
                className="icon"
                style={{
                  background: page === "social" ? color : "",
                }}
              >
                <SendOutlined />
              </span>
              <span className="label">Posts</span>
            </NavLink>
          </Menu.Item>
        ) : (
          <></>
        )}
        {checkRole(menu_item_users.training, user_type) ? (
          <Menu.Item key="7">
            <NavLink to="/training">
              <span
                className="icon"
                style={{
                  background: page === "training" ? color : "",
                }}
              ></span>
              <span className="label">Training</span>
            </NavLink>
          </Menu.Item>
        ) : (
          <></>
        )}
        <Menu.Item key="8">
          <NavLink to="/workspace">
            <span
              className="icon"
              style={{
                background: page === "workspace" ? color : "",
              }}
            >
              <ProfileOutlined />
            </span>
            <span className="label">WorkSpace</span>
          </NavLink>
        </Menu.Item>
        {user_type === LEADER ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop : 30
            }}
          >
            <NavLink to="/createservice">
              <Button
                className="label"
                style={{
                  width: "100%",
                }}
              >
                CREATE SERVICE
              </Button>
            </NavLink>
          </div>
        ) : (
          <></>
        )}
      </Menu>
    </>
  );
}

export default Sidenav;
