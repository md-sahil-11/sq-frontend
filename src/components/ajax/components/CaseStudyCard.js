import React from "react";
import { Row, Col, Card, Button, Avatar, Space } from "antd";

import profilavatar from "../../../assets/images/face-1.jpg";
import convesionImg from "../../../assets/images/face-3.jpg";
import convesionImg2 from "../../../assets/images/face-4.jpg";
import convesionImg3 from "../../../assets/images/face-5.jpeg";
import project1 from "../../../assets/images/home-decor-1.jpeg";
import project2 from "../../../assets/images/home-decor-2.jpeg";
import project3 from "../../../assets/images/home-decor-3.jpeg";
const project = [
  {
    img: project1,
    titlesub: "Project #1",
    title: "Modern",
    disciption:
      "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    img: project2,
    titlesub: "Project #2",
    title: "Scandinavian",
    disciption:
      "Music is something that every person has his or her own specific opinion about.",
  },
  {
    img: project3,
    titlesub: "Project #3",
    title: "Minimalist",
    disciption:
      "Different people have different taste, and various types of music, Zimbali Resort",
  },
];

function CaseStudyCard(p, index) {
  return (
    <>
      {project.map((p, index) => (
        <Col span={24} md={12} xl={6} key={index} className="mx-2 p-2" style={{margin : 10}}>
          <Card
            bordered={false}
            className="card-project p-2"
            cover={<img alt="example" src={p.img} />}
          >
            <div className="card-tag">{p.titlesub}</div>
            <h5>{p.title}</h5>
            <p>{p.disciption}</p>
            <Row gutter={[6, 0]} className="card-footer">
              <Col span={12}>
                <Button type="button">VIEW PROJECT</Button>
              </Col>
              <Col span={12} className="text-right">
                <Avatar.Group className="avatar-chips">
                  <Avatar size="small" src={profilavatar} />
                  <Avatar size="small" src={convesionImg} />
                  <Avatar size="small" src={convesionImg2} />
                  <Avatar size="small" src={convesionImg3} />
                </Avatar.Group>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default CaseStudyCard;
