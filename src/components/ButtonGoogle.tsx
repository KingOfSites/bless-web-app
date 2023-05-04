import React from 'react';
import googleLogo from "../assets/google-icon.png";

interface ButtonGoogleProps {
  onClick: () => void;
}

const ButtonGoogle: React.FC<ButtonGoogleProps> = ({ onClick }) => {
  return (
    <>
        <button className="button-google" onClick={onClick}>
          <img className="googleIcon" src={googleLogo} alt="Google Logo" />
          Faça Login com Google
        </button>
    </>
  );
};

export default ButtonGoogle;
