import { Button, Form, Input , Modal} from "antd";
import React, { useState } from "react";
import useApi from "../../../hooks/useApi";
const { TextArea } = Input;

const initialState = {
    title : "",
    description : "",
}
const ProjectDetails = ({visible,setVisible,serviceid}) => {
    
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [projectData , setProjectData ] = useState(initialState);
  const [form] = Form.useForm();
  const api = useApi();
  const handleOk = (e) => {
    if(serviceid){
        api.post(`workspaces/service/${serviceid}/purchase`,projectData).then((res)=>{
            setVisible(false) 
            console.log(res);
        }).catch((err)=>{
            setVisible(false)
            console.log(err);
        })
    }

  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setProjectData({
      ...projectData,
      [e.target.name]: val,
    });
  };
  return (
    <Modal
      title=""
      visible={visible}
      okText="PAY NOW"
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form layout={"vertical"} form={form} style={{ marginTop: 30 }}>
        <h3>Product Details</h3>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input name="title" placeholder="Title" value={projectData.title} onChange={handleChange}/>
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter Description" }]}
        >
          <TextArea name="description" rows={4} value={projectData.description} onChange={handleChange}/>
        </Form.Item>
        {/* <Form.Item
          name="deadline"
          label="Deadline"
          rules={[{ required: true, message: "Please enter Deadline" }]}
        >
          <RangePicker
            ranges={{
              Today: [moment(), moment()],
              "This Month": [
                moment().startOf("month"),
                moment().endOf("month"),
              ],
            }}
            onChange={onChange}
          />
        </Form.Item> */}
        <hr />
        <h3>Payment Details</h3>
        <Form.Item
          name="cardnumber"
          label="Card Number"
          rules={[{ required: true, message: "Please enter Card Number" }]}
        >
          <Input placeholder="Card Number" />
        </Form.Item>
        <Form.Item
          name="cvv"
          label="CVV Number"
          rules={[{ required: true, message: "Please enter CVV Number" }]}
        >
          <Input placeholder="123" />
        </Form.Item>
        {/* <Form.Item
          name="expire"
          label="Expire Date"
          rules={[{ required: true, message: "Please enter Expire Date" }]}
        >
          <DatePicker
            defaultValue={moment("2015/01", monthFormat)}
            format={monthFormat}
            picker="month"
            value={moment('2015/11',monthFormat)}
          />
        </Form.Item> */}
        {/* <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter Password" }]}
        >
          <Input placeholder="********" type={"password"} />
        </Form.Item> */}
      </Form>
    </Modal>
  );
};

export default ProjectDetails;
