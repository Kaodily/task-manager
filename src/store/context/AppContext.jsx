import React, { createContext, useContext, useReducer } from "react";
import { default as reducer } from "../reducer/AppReducer";
import datas from "../../../data.json";
export const Context = createContext();

const initialState = {
  data: datas.boards,
  isSidebar: true,
  theme: true,
  modal: false,
  filtered: "",
  tasks: {
    "Platform Launch": true,
    "Marketing Plan": false,
    Roadmap: false,
  },
};
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sideBarHandleClick = () => {
    dispatch({ type: "Sidebar" });
  };
  const themeHandleClick = () => {
    dispatch({ type: "Theme" });
  };
  const openModal = (e) => {
    dispatch({ type: "openModal", payload: { e } });
  };
  const closeModal = () => {
    dispatch({ type: "closeModal" });
  };
  const changeLink = (id) => {
    dispatch({ type: "changeLink", payload: { id } });
  };
  const DeleteBoard = (id) => {
    dispatch({
      type: "DeleteBoard",
      payload: {
        id,
      },
    });
  };
  const filteredTask = (id) => {
    dispatch({ type: "filteredTask", payload: { id } });
  };
  const addNewBoard = () => {
    dispatch({ type: "addNewBoard" });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        sideBarHandleClick,
        themeHandleClick,
        openModal,
        closeModal,
        DeleteBoard,
        changeLink,
        filteredTask,
        addNewBoard,
      }}>
      {children}
    </Context.Provider>
  );
};
export const Store = () => useContext(Context);

export default AppContext;
