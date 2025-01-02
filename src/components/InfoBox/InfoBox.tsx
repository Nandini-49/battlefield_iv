import React from "react";
import styles from "./infobox.module.scss";
import Header from "./components/Header/Header";
import StatBox from "./components/StatBox/StatBox";
import MapsBox from "./components/MapsBox/MapsBox";

const InfoBox: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <StatBox />
      <MapsBox />
    </div>
  );
};

export default InfoBox;
