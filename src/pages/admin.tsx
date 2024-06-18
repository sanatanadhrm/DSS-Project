/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Form, Select } from "antd";
import { useEffect } from "react";
import maps from "../assets/image.png";
import useAdminStore from "../store/useAdminStore.ts";

export const AdminPage = () => {
  const [form] = Form.useForm();
  const { sections, setSection }: any = useAdminStore();

  useEffect(() => {
    form.setFieldsValue(sections);
  }, [form, sections]);

  const onFinish = (values: any) => {
    for (const section in values) {
      setSection(section, values[section]);
    }
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div>
        <img src={maps} alt="maps" className="h-[400px]" />
      </div>
      <Card className="shadow-lg w-[500px]">
        <Form
          form={form}
          name="form_admin"
          style={{ maxWidth: 600 }}
          layout="vertical"
          initialValues={sections}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="flex flex-row gap-3">
            <div className="flex flex-col w-[250px]">
              {[...Array(5)].map((_, i) => (
                <Form.Item
                  key={`section_${i + 1}`}
                  label={`Section ${i + 1}`}
                  name={`section_${i + 1}`}
                  rules={[
                    {
                      required: true,
                      message: `Please input your section ${i + 1}!`,
                    },
                  ]}
                >
                  <Select
                    options={[
                      { value: "not_full", label: "Kosong" },
                      { value: "full", label: "Full" },
                    ]}
                  />
                </Form.Item>
              ))}
            </div>
            <div className="flex flex-col w-[250px]">
              {[...Array(5)].map((_, i) => (
                <Form.Item
                  key={`section_${i + 6}`}
                  label={`Section ${i + 6}`}
                  name={`section_${i + 6}`}
                  rules={[
                    {
                      required: true,
                      message: `Please input your section ${i + 6}!`,
                    },
                  ]}
                >
                  <Select
                    options={[
                      { value: "not_full", label: "Kosong" },
                      { value: "full", label: "Full" },
                    ]}
                  />
                </Form.Item>
              ))}
            </div>
          </div>

          <Form.Item className="flex justify-center">
            <Button
              type="primary"
              className="w-[100px] md:w-[150px] h-[40px] rounded-full text-lg font-semibold transform hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
