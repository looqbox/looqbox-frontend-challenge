import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Return to Home</Link>
        </Button>
      }
    />
  );
}
