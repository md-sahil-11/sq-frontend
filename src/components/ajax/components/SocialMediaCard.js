import { CommentOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const SocialMediaCard = ({imgUrl}) => (
  <Card
    style={{
      width: 560,
      borderRadius : 10
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        height={250}
      />
    }

    actions={[
      <LikeOutlined key={"like"}/>,
      <CommentOutlined key={"comment"}/>
    ]}s
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={"Title"}
      description="This is the description This is the description 
      This is the description This is the description 
      This is the description This is the description 
      This is the description This is the description 
      This is the description This is the description 
      This is the description This is the description 
      This is the description This is the description 
      This is the description This is the description This is the description This is the description "
    />

  </Card>
);

export default SocialMediaCard;