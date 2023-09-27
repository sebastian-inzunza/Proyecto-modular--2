import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative w-full max-w-md mx-auto">
        <div className="relative flex flex-col w-full p-6 bg-white border rounded-lg shadow-lg transform transition-transform ease-in-out duration-300">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="pb-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
