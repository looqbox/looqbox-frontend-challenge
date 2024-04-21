import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className={`${styles["typing-indicator"]}`}>
        <div className={`${styles["typing-circle"]}`}></div>
        <div className={`${styles["typing-circle"]}`}></div>
        <div className={`${styles["typing-circle"]}`}></div>
        <div className={`${styles["typing-shadow"]}`}></div>
        <div className={`${styles["typing-shadow"]}`}></div>
        <div className={`${styles["typing-shadow"]}`}></div>
      </div>
    </div>
  );
}

export default Loader;
