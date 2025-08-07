import React from 'react';

const fabStyle = {
  position: 'fixed',
  right: '20px',
  bottom: '80px',
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  backgroundColor: '#f57c00',
  boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  zIndex: 1100,
};

const iconStyle = {
  width: '24px',
  height: '24px',
  fill: '#fff',
};

function FAB({ onClick, isEditing }) {
    const SaveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <div style={fabStyle} onClick={onClick} aria-label={isEditing ? "Guardar cambios" : "Editar"}>
      {isEditing ? <SaveIcon /> : (
        // El icono de editar se mantiene por si se reutiliza el componente en otro lugar
        <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      )}
    </div>
  );
}

export default FAB;
