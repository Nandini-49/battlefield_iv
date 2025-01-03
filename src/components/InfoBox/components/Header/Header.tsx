import React from "react";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        #1| NASA | Noobs Welcome | Conquest 40Hz
      </h1>
      <div className={styles.description}>
        <p className={styles.info}>
          <img src="/assets/flag.png" alt="german flag" />
          conquest large - siege of shanghai - normal - 40 hz
        </p>
        <p className={styles.desc}>
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
          Request, Appeal, Visit us: www.epg.gg | Discord
          https://discord.gg/3r5NK4d
        </p>
      </div>
      <div className={styles.buttons}>
        <button type="button">
          &nbsp; &nbsp; &nbsp; Join &nbsp; &nbsp; &nbsp;
        </button>
        <button type="button">&nbsp;Spectate&nbsp;</button>
        <button type="button">Join As Commander</button>
        <button type="button">
          <svg
            width="24"
            height="18"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.165 0L14.8592 8.2918H23.5777L16.5243 13.4164L19.2185 21.7082L12.165 16.5836L5.11162 21.7082L7.80578 13.4164L0.752361 8.2918H9.47087L12.165 0Z"
              fill="white"
            />
          </svg>
          13672
        </button>
      </div>
    </div>
  );
};

export default Header;
