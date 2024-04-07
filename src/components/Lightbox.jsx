import React from 'react';
import '../style/lightbox.css';
import GoEcopictalk from "../asset/GoEcopictalk.png"

function Lightbox({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
       <img src={GoEcopictalk} alt="Lightbox Top" className="lightbox-image" />

        <button className="lightbox-close" onClick={onClose}>START</button>
      </div>
    </div>
  );
}

export default Lightbox;
