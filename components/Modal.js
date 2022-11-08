import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ title, show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  console.log(setIsBrowser);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="pop-container">
      <div className="model-box"></div>
      <style jsx>{`
        .pop-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .model-box {
          background: rgb(255, 255, 255);
          border-radius: 20px;
          max-height: initial;
          z-index: 70;
          margin: auto;
          animation-name: pulse-radium-animation-b93e56c5;
          animation-duration: 1s;
          animation-fill-mode: both;
          animation-iteration-count: 1;
          width: 450px;
          box-shadow: rgb(0 0 0 / 16%) 0px 10px 15px 0px;
          overflow: hidden auto;
          height: 500px;
        }
        .model-header {
          display: flex;
          justify-content: flex-end;
          font-size: 25px;
          position: absolute;
        }
        .style-model-body {
          padding-top: 10px;
          position: absolute;
        }
        .button-close {
          z-index: 99;
          position: absolute;
          right: 10px;
          top: -250px;
          cursor: pointer;
          left: 191px;
        }
        .mode-h2 {
          top: -250px;
          color: black;
          position: absolute;
          z-index: 99;
          font-weight: 700;
          line-height: 1.22;
          margin: 0px 0px 10px;
        }
      `}</style>
      <div className="model-header">
        <a href="#" onClick={handleCloseClick} className="button-close">
          x
        </a>
        <h2 className="mode-h2"> {title ? title : ""}</h2>
      </div>

      <p className="style-model-body">{children} tesrrrrrrrr</p>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
