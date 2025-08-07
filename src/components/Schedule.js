import React from 'react';

const headerStyle = {
  backgroundColor: '#FFDFBF', // naranja igual a la barra superior
  color: '#666', // texto blanco para contraste
  fontSize: '18px',
  fontWeight: 'normal',
  padding: '0px 0px',
  textAlign: 'center',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  marginBottom: '0',
  borderBottom: '0px solid #FFDFBF',
  paddingLeft: '15px',
  paddingRight: '13px',
};

const arrowStyle = {
  cursor: 'pointer',
  fontSize: '40px',
  color: '#f7ae66ff',
  userSelect: 'none',
  padding: '0 10px',
};

const containerStyle = {
  flex: 1,
  overflowY: 'auto',
  boxSizing: 'border-box',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: '#666', // color naranja claro para llenar el espacio blanco
  marginTop: '0',
  paddingTop: '0',
};

const hourRowStyle = {
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #ddd',
  height: '40px',
  fontSize: '14px',
  color: '#ffffffff',
  backgroundColor: '#fff',
};

const hourLabelStyle = {
  flex: '0 0 60px', // Un poco más de espacio
  textAlign: 'right',
  fontSize: '14px',
  color: '#666',
  userSelect: 'none',
  paddingRight: '10px',
  whiteSpace: 'nowrap', // Evita que el texto se divida
};

const hours = [
  '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm',
  '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm',
  '7 pm', '8 pm', '9 pm', '10 pm'
];

export default function Schedule() {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  const formatDate = (date) => {
    const dayName = dayNames[date.getDay()];
    const dayNumber = date.getDate();
    const monthName = monthNames[date.getMonth()];
    return `${dayName.charAt(0).toUpperCase() + dayName.slice(1)} ${dayNumber} de ${monthName}`;
  };

  const goPrevDay = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() - 1);
      return newDate;
    });
  };

  const goNextDay = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + 1);
      return newDate;
    });
  };

  return (
    <>
      <div style={headerStyle}>
        <div style={arrowStyle} onClick={goPrevDay} aria-label="Día anterior">&#8249;</div>
        <div>{formatDate(currentDate)}</div>
        <div style={arrowStyle} onClick={goNextDay} aria-label="Día siguiente">&#8250;</div>
      </div>
      <div style={containerStyle}>
        {hours.map((hour, index) => (
          <div key={index} style={hourRowStyle}>
            <div style={hourLabelStyle}>{hour}</div>
            <div style={{ flex: 1 }}></div>
          </div>
        ))}
      </div>
    </>
  );
}
