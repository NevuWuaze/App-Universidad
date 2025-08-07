import React from 'react';

const maintenanceContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#f57c00', // Un color oscuro y profesional
  color: '#fff',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  textAlign: 'center',
  padding: '0px',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2000, // Debe estar por encima de todo
};

const iconContainerStyle = {
  marginBottom: '30px',
};

const titleStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const messageStyle = {
  fontSize: '18px',
  color: '#ffffffff', // Un gris más claro
  maxWidth: '400px',
  lineHeight: '1.5',
};

// El ícono que proporcionaste, adaptado a JSX
const MaintenanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
    <path fill="none" stroke="#fff" strokeDasharray="16" strokeDashoffset="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c4.97 0 9 4.03 9 9">
      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/>
      <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
    </path>
  </svg>
);

function Maintenance({ onClose, sectionName = 'Esta sección' }) {
  return (
    <div style={maintenanceContainerStyle}>
      <div style={iconContainerStyle}>
        <MaintenanceIcon />
      </div>
      <h1 style={titleStyle}>En Mantenimiento</h1>
      <p style={messageStyle}>
        La zona de "{sectionName}" se encuentra en mantenimiento hasta nuevo aviso.
        <br />
        ¡Disculpa las molestias!
      </p>
      <button onClick={onClose} style={{ marginTop: '40px', padding: '10px 25px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#f8f8f8ff', color: 'black', border: 'none', borderRadius: '5px' }}>
        Volver
      </button>
    </div>
  );
}

export default Maintenance;