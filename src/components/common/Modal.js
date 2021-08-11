import React from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '../../assets/icons/Close_Icon.svg';
const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black opacity-80"
            style={{ zIndex: 100 }}
          />
          <div
            className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto outline-none flex justify-center items-center"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            style={{ zIndex: 110 }}
          >
            <div className="relative">
              <img
                src={CloseIcon}
                width="38px"
                
                className="absolute -right-8 -top-8 cursor-pointer"
              />
              {children}
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
