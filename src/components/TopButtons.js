import React from 'react';
import horarioIcon from '../assets/icons/horario.svg';
import aulaVirtualIcon from '../assets/icons/aula-virtual.svg';
import miUlimaIcon from '../assets/icons/mi-ulima.svg';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  maxWidth: '600px',
  backgroundColor: '#f57c00',
  padding: '5px 0',
  borderRadius: '4px',
  marginBottom: '0',
};

const buttonStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '10px',
  cursor: 'pointer',
  userSelect: 'none',
  color: '#fff',
  padding: '5px 10px',
};

const iconStyle = {
  width: '20px',
  height: '20px',
  marginBottom: '2px',
};

function TopButtons() {
  return (
    <div style={containerStyle}>
      <div style={buttonStyle}>
        <img src={horarioIcon} alt="Horario" style={iconStyle} />
        HORARIO
      </div>
      <div style={buttonStyle}>
        <img src={aulaVirtualIcon} alt="Aula Virtual" style={iconStyle} />
        AULA VIRTUAL
      </div>
      <div style={buttonStyle}>
        <img src={miUlimaIcon} alt="Mi Ulima" style={iconStyle} />
        MI ULIMA
      </div>
    </div>
  );
}

export default TopButtons;
