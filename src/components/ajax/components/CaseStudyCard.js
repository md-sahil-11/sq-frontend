import React from "react";
import { Row, Col, Card, Button, Avatar, Space } from "antd";


function CaseStudyCard({p}) {
  return (
    <>
        <Col span={24} md={12} xl={6}  className="mx-2 p-2" style={{margin : 10}}>
          <Card
            bordered={false}
            className="card-project p-2"
            cover={<img alt="example" src={p.img} />}
          >
            <div className="card-tag">{p.titlesub}</div>
            <h5>{p.title}</h5>
            <p>{p.disciption}</p>
            <Row gutter={[6, 0]} className="card-footer">
              <Col style={{marginLeft : "auto" , marginRight : 10 , marginBottom : 10}}>
                <Button type="primary">Read</Button>
              </Col>
            </Row>
          </Card>
        </Col>
    </>
  );
}

export default CaseStudyCard;
