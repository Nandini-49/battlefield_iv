import React, { Key } from "react";
import styles from "./mapsbox.module.scss";
import MapCard from "./components/MapCard/MapCard";

interface mapData {
  imageUrl: string;
  imageTitle: string;
}

const maps: mapData[] = [
  {
    imageUrl: "/src/assets/image.png",
    imageTitle: "Conquest Large \n Dawn Breaker",
  },
  { imageUrl: "/src/assets/game2.png", imageTitle: "Title 2" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
  { imageUrl: "/src/assets/game3.png", imageTitle: "Title 3" },
];

const MapsBox: React.FC = () => {
  return (
    <>
      <h5>Map Rotation</h5>
      <div className={styles.container}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map(
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
