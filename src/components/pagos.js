import React from 'react';

const backArrowStyle = {
  cursor: 'pointer',
  fontSize: '24px',
  userSelect: 'none',
  position: 'absolute',
  left: '15px',
};

const Pagos = ({ onClose }) => {
  return (
    <div style={{ paddingTop: '0px', backgroundColor: '#fff', minHeight: '100vh', boxSizing: 'border-box' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: '0 auto', padding: '0 20px' }}>
        <header style={{ backgroundColor: '#f57c00', color: 'white', padding: '10px 15px', fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={backArrowStyle} onClick={onClose}>
            &larr;
          </div>
          <span>Pagos</span>
        </header>
        <div style={{ marginTop: 20, textAlign: 'center', color: '#666' }}>
          <p style={{ fontSize: 14, marginBottom: 10 }}>Actualizado: Ahora</p>
          <div style={{ border: '1px solid #ddd', padding: 20, borderRadius: 4, backgroundColor: '#fafafa', fontStyle: 'italic' }}>
            No hay pagos pendientes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagos;
