import React from "react";
import { Outlet } from "react-router-dom";
import Buttons from "./buttons/Buttons";
import { useSelector } from "react-redux";
import Modal from "./modal/Modal";

const Body = () => {
  const store = useSelector((store) => store.app);

  return (
    <div className="body">
      {store.modal && <Modal />}
      <Buttons />
      <Outlet />
    </div>
  );
};

export default Body;
