import React, { Key } from "react";
import styles from "./statbox.module.scss";

interface headerType {
  key: string;
  value: string;
}

interface data {
  key: string;
  value: string;
}

interface statsType {
  title: string;
  contents: data[];
}

type headingsType = headerType[];
type statisticsType = statsType[];

const StatBox: React.FC = () => {
  const headings: headingsType = [
    {
      key: "Players",
      value: "64/64",
    },
    {
      key: "Ping",
      value: "47ms",
    },
    {
      key: "Tickrate",
      value: "60Hz",
    },
  ];

  const stats: statisticsType = [
    {
      title: "Settings",
      contents: [
        {
          key: "Region",
          value: "Europe - DE",
        },
        {
          key: "Punkbuster",
          value: "ON",
        },
        {
          key: "Fairfight",
          value: "ON",
        },
        {
          key: "Password",
          value: "ON",
        },
        {
          key: "Preset",
          value: "Normal",
        },
      ],
    },
    {
      title: "Advanced",
      contents: [
        {
          key: "Minimap",
          value: "ON",
        },
        {
          key: "Only Squad Leader Spawn",
          value: "ON",
        },
        {
          key: "Vehicles",
          value: "ON",
        },
        {
          key: "Team Balance",
          value: "ON",
        },
        {
          key: "Minimap Spotting",
          value: "ON",
        },
        {
          key: "HUD",
          value: "ON",
        },
        {
          key: "3P Vehicle Cam",
          value: "ON",
        },
        {
          key: "Regenerative Health",
          value: "ON",
        },
        {
          key: "Kill Camp",
          value: "ON",
        },
        {
          key: "Friendly Fire",
          value: "ON",
        },
        {
          key: "3D Spotting",
          value: "ON",
        },
        {
          key: "Enemy Nametags",
          value: "ON",
        },
      ],
    },
    {
      title: "Rules",
      contents: [
        {
          key: "Tickets",
          value: "400",
        },
        {
          key: "Vehicle Spawn Delay",
          value: "25",
        },
        {
          key: "Bullet Damage",
          value: "100",
        },
        {
          key: "Kick after Team Kills",
          value: "5",
        },
        {
          key: "Player Health",
          value: "100",
        },
        {
          key: "Player Respawn Time",
          value: "100",
        },
        {
          key: "Kick after Idle",
          value: "300",
        },
        {
          key: "Ban after kicks",
          value: "3",
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {headings.map((heading: headerType, index: Key) => (
          <div className={styles.items} key={index}>
            <p>{heading.key}</p>
            <h3>{heading.value}</h3>
          </div>
        ))}
      </div>

      <div className={styles.stats}>
        {stats.map((stat: statsType, index: Key) => {
          return (
            <div className={styles.rows} key={index}>
              <h4>{stat.title}</h4>
              {stat.contents.map((item: data, index: Key) => {
                return (
                  <div key={index}>
                    <p style={{ float: "left" }}>{item.key}</p>
                    <p style={{ float: "right" }}>{item.value}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatBox;
