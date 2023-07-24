import React from "react";
// import Modal from "./Modal";
import { Store } from "../../store/context/AppContext";
import MoreModal from "./MoreModal";
import DeleteModal from "./DeleteModal";
import MobileNavModal from "./MobileNavModal";
// import TaskModal from "./TaskModal";

const ModalManager = () => {
  const { modal } = Store();
  return (
    <>
      <MoreModal open={modal === "more"} />
      <DeleteModal open={modal === "delete"} />
      <MobileNavModal open={modal === "mobilenav"} />
      {/* <TaskModal open={modal === 'task'} /> */}
    </>
  );
};

export default ModalManager;
