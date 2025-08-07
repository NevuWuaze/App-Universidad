import React from 'react';
import diplomaLogo from '../assets/icons/logo/diploma.png';

const containerStyle = {
  backgroundColor: '#f57c00',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const logoStyle = {
  width: '160px',
  height: 'auto',
  marginBottom: '20px',
};



const textStyle = {
  color: '#fff',
  fontFamily: "'Times New Roman', serif",
  fontWeight: 'bold',
  fontSize: '24px',
  textAlign: 'center',
  lineHeight: '1.2',
  userSelect: 'none',
};

function SplashScreen() {
  return (
    <div style={containerStyle}>
      <img src={diplomaLogo} alt="Logo Universidad de Lima" style={logoStyle} />
      <div style={textStyle}>
        UNIVERSIDAD<br />
        DE LIMA
      </div>
    </div>
  );
}

export default SplashScreen;
