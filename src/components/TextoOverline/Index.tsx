import React from 'react';
import './style.scss';

interface TextOverlineProps {
  texto:String
}
function TextOverline({texto}:TextOverlineProps) {
   return (
    <div className="container-overlay">
      <hr className="line" />
      <div className="overlay-text">{texto}</div>
    </div>
  );
}

export default TextOverline;