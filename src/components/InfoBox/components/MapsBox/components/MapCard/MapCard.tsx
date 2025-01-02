import React, { Key } from "react";
import styles from "./mapcard.module.scss";

interface propType {
  imageUrl: string;
  imageTitle: string;
  key: Key;
}

const MapCard: React.FC<propType> = ({ imageUrl, imageTitle, key }) => {
  return (
    <div
      className={styles.container}
      key={key}
      //   style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <img src={imageUrl} alt={`game${key}`} />
      <div className={styles.title}>
        <h3>{imageTitle}</h3>
      </div>
    </div>
  );
};

export default MapCard;
