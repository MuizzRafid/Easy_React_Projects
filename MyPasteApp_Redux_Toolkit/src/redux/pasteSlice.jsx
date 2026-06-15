import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
  pasteOk: true,
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;

      // add a check -> for paste alread exist
      if (paste.title.length < 1 && paste.content.length < 5) {
        toast("Please Give a Unique Paste Name");
        return;
      }

      state.pastes.map((pst) => {
        if (pst.title === paste.title) {
          state.pasteOk = false;
        } else {
          state.pasteOk = true;
        }
      });
      if (state.pasteOk) {
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste Created Successfully");
      } else {
        toast("This paste already exist");
      }
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated");
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removeFromPastes: (state, action) => {
      const rpasteId = action.payload;

      const index = state.pastes.findIndex((item) => item._id === rpasteId);
      console.log("index ", index);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
