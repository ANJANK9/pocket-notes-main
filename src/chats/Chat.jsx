import React from "react";
import styles from "./chat.module.css";

const Chat = ({ text, time, date }) => {
  return (
    <div className={styles.mainChat}>
      <div className={styles.box}>
        <p className={styles.text}>{text}</p>
        <h4>{date + " " + "•" + " " + time}</h4>
      </div>
    </div>
  );
};

export default Chat;
