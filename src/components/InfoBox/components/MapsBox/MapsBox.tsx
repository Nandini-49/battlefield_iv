import React, { Key } from "react";
import styles from "./mapsbox.module.scss";
import MapCard from "./components/MapCard/MapCard";

interface mapData {
  imageUrl: string;
  imageTitle: string;
}

const maps: mapData[] = [
  {
    imageUrl: "/src/assets/map1.png",
    imageTitle: "Conquest Large \n Dawn Breaker",
  },
  {
    imageUrl: "/src/assets/map2.png",
    imageTitle: "Conquest Large \n Propoganda",
  },
  {
    imageUrl: "/src/assets/map3.png",
    imageTitle: "Conquest Large \n Operation Locker",
  },
  {
    imageUrl: "/src/assets/map4.png",
    imageTitle: "Conquest Large \n Lancang Dam",
  },
  {
    imageUrl: "/src/assets/map5.png",
    imageTitle: "Conquest Large \n Seige of Shanghai",
  },
  {
    imageUrl: "/src/assets/map6.png",
    imageTitle: "Conquest Large \n Golmud Railway",
  },
  {
    imageUrl: "/src/assets/map7.png",
    imageTitle: "Conquest Large \n Propoganda",
  },
  {
    imageUrl: "/src/assets/map8.png",
    imageTitle: "Conquest Large \n Seige of Shanghai",
  },
  {
    imageUrl: "/src/assets/map9.png",
    imageTitle: "Conquest Large \n DawnBreaker",
  },
  {
    imageUrl: "/src/assets/map10.png",
    imageTitle: "Conquest Large \n Propaganda",
  },
  {
    imageUrl: "/src/assets/map11.png",
    imageTitle: "Conquest Large \n Operation Locker",
  },
  {
    imageUrl: "/src/assets/map12.png",
    imageTitle: "Conquest Large \n Lancang Dam",
  },
  {
    imageUrl: "/src/assets/map13.png",
    imageTitle: "Conquest Large \n Seige of Shanghai",
  },
  {
    imageUrl: "/src/assets/map14.png",
    imageTitle: "Conquest Large \n Golmud Railway",
  },
  {
    imageUrl: "/src/assets/map15.png",
    imageTitle: "Conquest Large \n Propaganda",
  },
  {
    imageUrl: "/src/assets/map16.png",
    imageTitle: "Conquest Large \n Seige of Shanghai",
  },
];

const MapsBox: React.FC = () => {
  return (
    <>
      <h5>Map Rotation</h5>
      <div className={styles.container}>
        {Array.from({ length: 16 }, (_, i) => i + 1).map(
          (__: number, index: Key) => {
            return (
              <MapCard
                imageUrl={maps[Number(index)].imageUrl}
                imageTitle={maps[Number(index)].imageTitle}
                key={index}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default MapsBox;
