import React, { useState } from "react";
import Modal from "./Modal";
import { Store } from "../../store/context/AppContext";
import { AiOutlineClose } from "react-icons/ai";

const NewBoardModal = ({ open }) => {
  const [isVisible, setIsVisible] = useState();
  const columnsData = [
    {
      id: 1,
      name: "Todo",
    },
    {
      id: 2,
      name: "Doing",
    },
  ];
  const [columns, setColumn] = useState(columnsData);

  const showColumns = () => {
    setIsVisible(true);
    setColumn(prev => {
      return [...prev, {
        id: 3,
        name: "",
      }]
    })
  };

  const deleteColumn = (id) => {
    console.log(id);
    const filtered = columnsData.filter((item) => item.id !== id);
    console.log(filtered);
    setColumn(filtered);
  };
  const { addNewBoard, closeModal } = Store();

  return (
    <Modal open={open}>
      <div
        onClick={closeModal}
        className="fixed bottom-0 left-0 right-0 top-0 bg-[rgb(0,0,0,0.7)] "
      />
      <div className="board_modal fixed left-2/4 top-[20%] h-max w-[340px] translate-x-[-50%]  p-6 md:w-[380px]">
        <p className="mb-3 font-bold">Add new Board</p>
        <form>
          <label className="text-[13px] font-bold " htmlFor="board name">
            Board Name
          </label>
          <input
            id="board name"
            type="text"
            className="my-2 h-5 w-full border-2 p-4"
            required
          />
          <p className="text-[12px] font-bold">Board Column</p>
          {columns.map((item) => {
            return (
              <div key={item.id} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item.name}
                  className="my-2 h-5 text-[12px] w-full border-2 p-4"
                  required
                />
                <AiOutlineClose onClick={() => deleteColumn(item.id)} />
              </div>
            );
          })}

          {isVisible && <div></div>}
          <button
            onClick={showColumns}
            className="my-3 h-max w-full rounded-[30px] bg-red-400 p-2 text-[12px] text-white">
            +Add New Column
          </button>
          <button
            onClick={addNewBoard}
            className="cancel_button mb-3 h-max w-full rounded-[30px] p-2  text-[12px] text-[#635fc7]">
            Create New Board
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default NewBoardModal;
