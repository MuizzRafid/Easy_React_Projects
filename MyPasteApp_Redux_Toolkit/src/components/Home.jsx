import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      //create
      dispatch(addToPastes(paste));

      toast.success("paste created");
    }

    //after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }
  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  return (
    <div className="ml-6 mr-6 mt-4 mx-w-5xl ">
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl pl-4 mt-2 bg-gray-500 w-[67%] "
          type="text"
          placeholder=" Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={createPaste} className="bg-gray-500 p-2 rounded-2xl">
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="rounded-2xl mt-4  w-full p-4 bg-gray-500"
          name=""
          id=""
          placeholder=" Please Write The Content"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
