import React from "react";
import Modal from "./Modal";
import { Store } from "../../store/context/AppContext";

const DeleteModal = ({ open }) => {
  const { closeModal } = Store();

  return (
    <Modal open={open}>
      <div className=" fixed bottom-0 left-0 right-0 top-0 bg-[rgb(0,0,0,0.7)] " />
      <div className="delete_modal fixed left-2/4 top-[40%] h-max w-[340px] translate-x-[-50%]  p-6 md:w-[380px]">
        <p className="font-bold text-red-400">Delete this board?</p>
        <p className="py-2 text-sm leading-6">
          Are you sure you want to delete the board? This action will remove all
          columns and tasks and cannot be reversed.
        </p>
        <button className="my-3 h-max w-full rounded-[30px] bg-red-400 p-2 text-white">
          Delete
        </button>
        <button
          className="cancel_button mb-3 h-max w-full text-[#635fc7]  rounded-[30px] p-2"
          onClick={closeModal}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
