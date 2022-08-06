import { UploadOutlined, SignalFilled } from "@ant-design/icons";
import { Button, Form, Input, Radio, Upload } from "antd";
import React, { useState } from "react";
import AddTags from "./AddTags";
import DynamicFields from "./DynamicField";
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
      <Form.Item
        name="attach items"
      >
        <Radio.Group style={{border : "none"}}>
          <Radio.Button value="attach" style={{border : "none"}}>
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
          </Radio.Button>
          <Radio.Button value="poll" style={{border : "none"}}>
            <Button>
              <SignalFilled />
            </Button>
          </Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <DynamicFields/>
      </Form.Item>
      <Form.Item>
        <AddTags tags={tags} setTags={setTags}/>
      </Form.Item>
      {/* <Form.Item >
        <Button type="primary">Submit</Button>
      </Form.Item> */}
    </Form>
  );
};

export default PostForm;
