import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

import notFoundImg from "../../assets/images/notFound.jpg";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Result
      status="info"
      title="Oops! Page not found"
      subTitle="We can't find the page you're looking for."
      icon={
        <img
          src={notFoundImg}
          alt="page not found"
          style={{ maxWidth: 320, width: "100%", height: "auto" }}
        />
      }
      extra={
        <Button type="link" onClick={() => navigate("/")}>
          Return to home
        </Button>
      }
    />
  );
}
