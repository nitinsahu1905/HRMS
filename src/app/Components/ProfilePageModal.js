import React from 'react';

const Modal = ({ show, onClose, details }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[40vw]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Details</h2>
          <button onClick={onClose} className="text-xl">&times;</button>
        </div>
        <div className="space-y-2">
          {details.map((detail, index) => (
            <div key={index} className="flex justify-between">
              <span className="font-semibold">{detail.field}</span>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
