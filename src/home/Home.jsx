import React from "react";
import styles from "./home.module.css";
import homeImage from "../assets/home.png";

const Home = () => {
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <img src={homeImage} alt="" />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className={styles.bottom}>🔒end-to-end encrypted</div>
    </div>
  );
};

export default Home;
