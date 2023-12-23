import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    buttons: JSON.parse(localStorage.getItem("buttons")) || [],
    chats: JSON.parse(localStorage.getItem("chats")) || {},
    modal: false,
  },
  reducers: {
    setButtons: (state, action) => {
      const newButtons = [...state.buttons, action.payload];
      state.buttons = newButtons;
      localStorage.setItem("buttons", JSON.stringify(state.buttons));
    },
    addChats: (state, action) => {
      state.chats = action.payload;
      localStorage.setItem("chats", JSON.stringify(state.chats));
    },
    setModal: (state, action) => {
      state.modal = !state.modal;
    },
  },
});

export const { setButtons, addChats, setModal } = appSlice.actions;

export default appSlice.reducer;
