import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isDetailsPage = location.pathname.startsWith("/pokemon/");
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <header className={styles.appHeader}>
      {isDetailsPage && (
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={handleGoBack}
          className={styles.headerBackButton}
        >
          Back
        </Button>
      )}
      <h1 className={styles.pokedexTitle}>Pokédex</h1>
    </header>
  );
}
