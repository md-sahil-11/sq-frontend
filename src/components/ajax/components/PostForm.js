import { UploadOutlined, SignalFilled } from "@ant-design/icons";
import { Button, Form, Input, Radio, Upload } from "antd";
import React, { useState } from "react";
import AddTags from "./AddTags";
const { TextArea } = Input;

const PostForm = () => {
  const [tags, setTags] = useState([]);
  const [form] = Form.useForm();
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <Form layout={"vertical"} form={form} style={{ marginTop: 30 }}>
      <Form.Item label="Post Heading">
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item label="Write Post">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item name="attach items">
        <Form.Item
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button>
              <UploadOutlined />
            </Button>
          </Upload>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <AddTags tags={tags} setTags={setTags} />
      </Form.Item>
    </Form>
  );
};

export default PostForm;
