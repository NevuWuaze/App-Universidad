import React from 'react';

// Estilos
const containerStyle = {
  backgroundColor: '#ffe6cc',
  minHeight: '100vh',
  fontFamily: "'Arial', sans-serif",
};

const headerStyle = {
  background: 'linear-gradient(90deg, #f57c00, #fb8c00)',
  color: 'white',
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 'bold',
  fontSize: '24px',
  textTransform: 'uppercase',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 10,
};

const backArrowStyle = {
  cursor: 'pointer',
  fontSize: '24px',
  marginRight: '16px',
  userSelect: 'none',
};

const titleContainerStyle = {
  flex: 1,
  textAlign: 'center',
  marginRight: '30px', // para compensar la flecha de regreso
};

const scheduleContainerStyle = {
  padding: '20px',
};

const timeSlotStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '10px',
};

const timeLabelStyle = {
  width: '70px', // Un ancho fijo que podría causar el problema
  color: '#6d4c41',
  fontWeight: 'bold',
  fontSize: '16px',
  paddingTop: '10px',
  textAlign: 'right',
  paddingRight: '15px',
  flexShrink: 0,
  whiteSpace: 'nowrap', // Solución: Evita que el texto se divida en dos líneas
};

const courseCardStyle = {
  flexGrow: 1,
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '15px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  borderLeft: '5px solid #f57c00',
};

const courseTitleStyle = {
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#333',
};

const courseInfoStyle = {
  fontSize: '14px',
  color: '#666',
  marginTop: '5px',
};

// Datos de ejemplo
const scheduleData = [
  { time: '8 a.m.', course: { title: 'CÁLCULO I', professor: 'GUTIERREZ, PABLO', location: 'Aula 501' } },
  { time: '10 a.m.', course: { title: 'ÁLGEBRA LINEAL', professor: 'TORRES, MARIA', location: 'Aula 302' } },
  { time: '12 p.m.', course: null },
  { time: '2 p.m.', course: { title: 'FÍSICA I', professor: 'RAMOS, CARLOS', location: 'Lab B' } },
  { time: '4 p.m.', course: { title: 'PROGRAMACIÓN I', professor: 'SOTO, ANA', location: 'Lab C' } },
];

function Horario({ onClose }) {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={backArrowStyle} onClick={onClose}>&larr;</div>
        <div style={titleContainerStyle}>Mi Horario</div>
      </header>
      <div style={scheduleContainerStyle}>
        {scheduleData.map((slot, index) => (
          <div key={index} style={timeSlotStyle}>
            <div style={timeLabelStyle}>{slot.time}</div>
            <div style={courseCardStyle}>
              {slot.course ? (
                <>
                  <div style={courseTitleStyle}>{slot.course.title}</div>
                  <div style={courseInfoStyle}>{slot.course.professor}</div>
                  <div style={courseInfoStyle}>{slot.course.location}</div>
                </>
              ) : (
                <div style={{ color: '#ccc' }}>Hora libre</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Horario;