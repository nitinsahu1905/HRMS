import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({isOpen, onClose, children}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-[10px] shadow-lg relative">
        {children}
        <button onClick={onClose} className="absolute top-1.5 right-1.5  text-dark-blue text-[20px]   hover:text-gray-600">
          <IoCloseSharp/>
        </button>
      </div>
    </div>
  )
}

export default Modal