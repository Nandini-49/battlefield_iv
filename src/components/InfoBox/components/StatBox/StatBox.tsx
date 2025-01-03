import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./statbox.module.scss";

// Define types for the data
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
  const [headings, setHeadings] = useState<headingsType>([]);
  const [stats, setStats] = useState<statisticsType>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get("http://localhost:3000/api/statistics") // Adjust the URL as needed
      .then((response) => {
        // Assume response contains both headings and statistics
        setHeadings(response.data.headings); // Modify based on your API response structure
        setStats(response.data.statistics); // Modify based on your API response structure
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data from the server");
        setLoading(false);
      });
  }, []);

  // Loading and error handling
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {headings.map((heading: headerType, index: number) => (
          <div className={styles.items} key={index}>
            <p>{heading.key}</p>
            <h3>{heading.value}</h3>
          </div>
        ))}
      </div>

      <div className={styles.stats}>
        {stats.map((stat: statsType, index: number) => (
          <div className={styles.rows} key={index}>
            <h4>{stat.title}</h4>
            {stat.contents.map((item: data, index: number) => (
              <div key={index}>
                <p style={{ float: "left" }}>{item.key}</p>
                <p style={{ float: "right" }}>{item.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatBox;
