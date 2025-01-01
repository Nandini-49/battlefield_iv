import React from "react";
import styles from "./sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.games}></div>
      <div className={styles.others}></div>
      <div className={styles.misc}></div>
    </div>
  );
};

export default Sidebar;
