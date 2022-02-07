import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Buttons = ({ showNextImage, showPrevImage }) => {
  return (
    <>
      <button className="prev" onClick={showPrevImage}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={showNextImage}>
        <FiChevronRight />
      </button>
    </>
  );
};

export default Buttons;
