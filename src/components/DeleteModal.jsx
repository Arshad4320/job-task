import React from "react";

import { FiAlertCircle } from "react-icons/fi";

const DeleteModal = ({ message, handleDelete, setDeleted }) => {
  const confirmDelete = () => {
    setDeleted(null);
    handleDelete();
  };
  return (
    <div className="fixed top-20 left-0 right-0 bottom-0 transition duration-350 z-[999]">
      <div className="fixed top-0 left-0 right-0 bottom-0  bg-gray-900 opacity-30 transition duration-350"></div>
      <div className="overflow-auto md:w-96 absolute top-5 left-5 right-5 md:left-[30%] lg:left-[38%] rounded-md bg-white opacity-100 p-5">
        <div className="flex items-center">
          <FiAlertCircle size={24} className="text-secondary mr-3" />
          <h1 className=" font-semibold">
            Do you want to delete this {message} ?
          </h1>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-primary text-white px-5 py-0.5"
            onClick={confirmDelete}
          >
            Yes
          </button>
          <button
            className=" bg-gray-600 text-white px-5 py-0.5 ml-2"
            onClick={() => setDeleted(null)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
