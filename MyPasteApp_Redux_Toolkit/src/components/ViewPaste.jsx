import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {
  const { id } = useParams("");
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((p) => p._id === id);
  console.log("final paste");

  return (
    <div className="ml-6 mr-6 mt-4 ">
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl pl-4 mt-2 bg-gray-500 w-full "
          type="text"
          placeholder="enter title here"
          value={paste?.title}
          disabled
        />
      </div>
      <div>
        <textarea
          className="rounded-2xl mt-4 w-full p-4 bg-gray-500"
          name=""
          id=""
          placeholder="InterContent"
          value={paste?.content}
          disabled
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default ViewPaste;
