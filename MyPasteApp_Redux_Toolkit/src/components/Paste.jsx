import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  const handleShare = (paste) => {
    const shareLink = `${window.location.origin}/pastes/${paste._id}`;

    navigator.clipboard.writeText(shareLink);

    toast.success("Link copied!");
  };

  return (
    <div className="w-full mx-auto max-w-6xl px-4 py-6 border-4 border-gray-700 my-2">
      <input
        className="w-full  rounded-2xl border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none text-sm focus:border-blue-400
        focus:ring-2 focus:ring-blue-400/20"
        type="text"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="my-3 border-4 border-gray-700">
        <div className="px-4 py-2 border-b-4 border-gray-700">
          <h1 className="text-2xl font-semibold">All Pastes</h1>
        </div>
        <div className="flex flex-col px-2 pb-2 gap-4 mt-6">
          {filterData.length > 0 &&
            filterData.map((paste) => {
              return (
                <div
                  key={paste._id}
                  className="rounded-lg flex flex-col md:justify-between md:flex-row  border-2 border-gray-700 bg-gray-900 px-2 py-4 shadow-sm "
                >
                  <div className=" flex flex-col  sm: justify-start  ">
                    <div
                      className="w-full  sm: w-auto text-2xl font-semibold text-white flex justify-center p-1 sm:p-0
                    bg-gray-600 sm:bg-gray-900"
                    >
                      {paste.title}
                    </div>
                    <div
                      className="w-full sm: w-auto my-2 line-clamp-3 text-sm  text-gray-300 flex justify-center
                    p-4 sm:p-0  bg-gray-600 sm:bg-gray-900"
                    >
                      {paste.content}
                    </div>
                  </div>
                  <div className="flex flex-col items-center sm:items-end ">
                    <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
                      <button className=" rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-[#112E81]">
                        <NavLink
                          className="w-full sm:w-auto"
                          to={`/?pasteId=${paste?._id}`}
                        >
                          Edit
                        </NavLink>
                      </button>
                      <button className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-[#4647AE]">
                        {/* <a href={`/pastes/${paste?._id}`}>View</a> */}
                        <NavLink to={`/paste/${paste?._id}`}> View</NavLink>
                      </button>
                      <button
                        className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-[#4382DF]"
                        onClick={() => {
                          console.log("here i am");
                          return handleDelete(paste?._id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-[#AACCD6]"
                        onClick={() => {
                          navigator.clipboard.writeText(paste?.content);
                          toast.success("copied to clipboard");
                        }}
                      >
                        Copy
                      </button>
                      <button
                        className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-[#feae6c]"
                        onClick={() => handleShare(paste)}
                      >
                        Share
                      </button>
                    </div>
                    <div className="mt-3 text-sm text-gray-500">
                      {new Date(paste.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Paste;
