import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./mapsbox.module.scss";
import MapCard from "./components/MapCard/MapCard";

interface mapData {
  imageUrl: string;
  imageTitle: string;
}

const MapsBox: React.FC = () => {
  const [maps, setMaps] = useState<mapData[]>([]);

  useEffect(() => {
    axios
      .get("https://battlefield-iv-backend-gtac.onrender.com/api/maps")
      .then((response) => {
        setMaps(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h5>Map Rotation</h5>
      <div className={styles.container}>
        {maps.map((map, index) => (
          <MapCard
            key={index}
            imageUrl={map.imageUrl}
            imageTitle={map.imageTitle}
          />
        ))}
      </div>
    </>
  );
};

export default MapsBox;
