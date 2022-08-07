import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";
import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-2.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";
import { useEffect, useState } from "react";
import TaskTable from "../components/TaskTable";
import useApi from "../../../hooks/useApi";

const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

//task table data
const columns = [
  {
    title: "TITLE",
    dataIndex: "title",
    // key: "name",
    // width: "32%",
  },
  {
    title: "PRIORITY",
    dataIndex: "priority",
    // key: "function",
  },

  {
    title: "STATUS",
    // key: "status",
    dataIndex: "status",
  },
  {
    title: "ASSIGNEE",
    // key: "status",
    dataIndex: "assignee",
  },
  {
    title: "ASSIGNOR",
    // key: "status",
    dataIndex: "assignor",
  },
  {
    title: "ASSIGNED AT",
    // key: "employed",
    dataIndex: "assigned_at",
  },
  {
    title: "",
    // key: "employed",
    dataIndex: "info",
  },
];

// project table start
const project = [
  {
    title: "PROJECT NAME",
    dataIndex: "title",
    width: "32%",
  },
  {
    title: "CLIENT",
    dataIndex: "client",
  },
  {
    title: "ASSIGNED AT",
    dataIndex: "assigned_at",
  },
  {
    title: "STATUS",
    dataIndex: "status",
  },
  {
    title: "",
    dataIndex: "info",
  },
];

function Project() {
  const [taskTable, setTaskTable] = useState(false);
  const [dataproject, setDataproject] = useState([]);
  const [datatask, setDatatask] = useState([]);
  const api = useApi();

  const populateProjectTable = (options) => {
    api
      .get("workspaces/dashboard/1/projects")
      .then((res) => {
        const results = res.data.results.filter(
          i => options.includes(i.is_pending)
        )
        console.log(results);
        for (let i of results) {
          var date = i.assigned_at;
          var readable_date = new Date(date).toDateString();
          const rowData = {
            key: `${i.id}`,
            title: (
              <>
                <div className="avatar-info">
                  <Title level={5}>{i.title}</Title>
                </div>
              </>
            ),
            client: (
              <>
                <div className="semibold">{i.user.firstname}</div>
              </>
            ),
            assigned_at: (
              <>
                <div className="text-sm">{readable_date}</div>
              </>
            ),
            status: (
              <>
                <div className="ant-progress-project">
                  {i.is_pending ? (
                    <span
                      onClick={(e) => completeProject(e, i.id)}
                      className="semibold"
                      style={{ color: "#1890FF", cursor: "pointer" }}
                    >
                      IN PROGRESS
                    </span>
                  ) : (
                    <span
                      className="semibold"
                      style={{ color: "green", cursor: "pointer" }}
                    >
                      COMPLETED
                    </span>
                  )}
                </div>
              </>
            ),
            info: (
              <>
                <div
                  className="semibold"
                  style={{ color: "#1890FF", cursor: "pointer" }}
                  onClick={(event) => showTaskTable(i.id)}
                >
                  Info
                </div>
              </>
            ),
          };
          setDataproject((t) => [...t, rowData]);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const onChange = (e) => {
    setDataproject([])
    if (e.target.value == 'ongoing') {
      populateProjectTable([true])
    } else populateProjectTable([false])
  }
  const priority_color = {
    high: "red",
    medium: "yellow",
    low: "green",
  };
  const showTaskTable = (id) => {
    api.get(`workspaces/dashboard/${id}/project_tasks`).then((res) => {
      for (let i of res.data.results) {
        var date = i.assigned_at;
        var readable_date = new Date(date).toDateString();
        const rowData = {
          key: i.id,
          title: (
            <>
              <div className="author-info">
                <Title level={5}>{i.title}</Title>
              </div>
            </>
          ),
          priority: (
            <>
              <div className="author-info">
                <Title
                  style={{
                    color: priority_color[i.priority],
                    textTransform: "capitalize",
                  }}
                  level={5}
                >
                  {i.priority}
                </Title>
              </div>
            </>
          ),
          assignor: (
            <>
              <span>{i.assignor.firstname}</span>
            </>
          ),
          assignee: (
            <>
              <span>{i.assignee.firstname}</span>
            </>
          ),
          status: (
            <>
              <Button
                type="primary"
                className={!i.is_pending ? "tag-badge" : "tag-primary"}
              >
                {i.is_pending ? "PENIDNG" : "COMPLETED"}
              </Button>
            </>
          ),
          assigned_at: (
            <>
              <div className="ant-employed">
                <span>{readable_date}</span>
              </div>
            </>
          ),
          info: (
            <>
              <div
                className="semibold"
                style={{ color: "#1890FF", cursor: "pointer" }}
                onClick={(event) => showTaskTable(i.id)}
              >
                Info
              </div>
            </>
          ),
        };
        setDatatask((t) => [...t, rowData]);
      }
      if (res.status == 200) setTaskTable(true);
    });
  };
  const completeProject = (e, id) => {
    api
      .put(`workspaces/dashboard/${id}/complete_project`)
      .then((res) => console.log(res));
  };
  
  useEffect(() => {
    populateProjectTable([true, false])
  }, []);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            {taskTable ? (
              <>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setTaskTable(false)}
                >
                  &nbsp;&nbsp;All projects
                </span>{" "}
                / Tasks
                <div style={{ height: "14px" }}></div>
                <TaskTable columns={columns} data={datatask} />
              </>
            ) : (
              <>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setTaskTable(false)}
                >
                  &nbsp;&nbsp;All projects
                </span>
                <div style={{ height: "14px" }}></div>
                <Card
                  bordered={false}
                  className="criclebox tablespace mb-24"
                  title="Projects table"
                  extra={
                    <>
                      <Radio.Group onChange={onChange} defaultValue="all">
                        <Radio.Button value="ongoing">Ongoing</Radio.Button>
                        <Radio.Button value="completed">Completed</Radio.Button>
                      </Radio.Group>
                    </>
                  }
                >
                  <div className="table-responsive">
                    <Table
                      columns={project}
                      dataSource={dataproject}
                      pagination={false}
                      className="ant-border-space"
                    />
                  </div>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Project;