import { Button, Checkbox, Input, Radio, Select, Space } from "antd";

export const HomePage = () => {
  return (
    <Space direction="vertical">
      <p>Hello World!</p>
      <Space direction="horizontal">
        <Button type="primary">Button</Button>
        <Button type="default">Button</Button>
        <Button type="text">Button</Button>
        <Button type="dashed">Button</Button>
        <Button type="link">Button</Button>
      </Space>
      <Radio>Radio</Radio>
      <Checkbox>Checkbox</Checkbox>
      <Input placeholder="Input" />
      <Select
        placeholder="Select an option"
        size="middle"
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
          { label: "Option 3", value: "3" },
        ]}
      />
    </Space>
  );
};
