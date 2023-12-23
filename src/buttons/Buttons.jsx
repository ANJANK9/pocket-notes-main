import React from "react";
import styles from "./buttons.module.css";
import Button from "./Button";
import { IconButton } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../store/appSlice";

const Buttons = () => {
  const dispatch = useDispatch();

  const store = useSelector((store) => store.app);

  return (
    <div className={styles.box}>
      <div className={styles.heading}>
        <h1>Pocket Notes</h1>
      </div>
      <div className={styles.buttons}>
        {store.buttons.map((m) => (
          <Button key={m.id} id={m.id} name={m.name} color={m.color} />
        ))}
      </div>
      <div className={styles.create}>
        <IconButton
          $size="4rem"
          $bgColor="#16008B"
          onClick={() => dispatch(setModal())}
        >
          +
        </IconButton>
      </div>
    </div>
  );
};

export default Buttons;
