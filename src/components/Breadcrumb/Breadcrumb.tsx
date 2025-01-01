import React from "react";
import styles from "./breadcrumb.module.scss";

const Breadcrumb: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.path}>
        <svg
          width="9"
          height="18"
          viewBox="0 0 9 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M8.15829 1.06015L1 8.91545L8.15829 16.7708"
            stroke="white"
          />
        </svg>
        Multiplayer<p>/</p> Server Browser <p>/</p>
      </div>
      <div className={styles.heading}>Server Info</div>
    </div>
  );
};

export default Breadcrumb;
