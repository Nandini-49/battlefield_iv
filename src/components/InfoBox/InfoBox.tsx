import React from "react";
import styles from "./infobox.module.scss";
import Header from "./components/Header/Header";

const InfoBox: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      InfoBox
    </div>
  );
};

export default InfoBox;
