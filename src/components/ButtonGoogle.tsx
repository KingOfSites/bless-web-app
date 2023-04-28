import React from 'react';
import googleLogo from "../assets/google-icon.png";

interface ButtonGoogleProps {
  onClick: () => void;
}

const ButtonGoogle: React.FC<ButtonGoogleProps> = ({ onClick }) => {
  return (
    <div className="separator20px flex flex-1 width100perc">
    <button className="button-google" onClick={onClick}>
      <img className="googleIcon" src={googleLogo} alt="Google Logo" />
      Faça Login com Google
    </button>
</div>
  );
};

export default ButtonGoogle;
