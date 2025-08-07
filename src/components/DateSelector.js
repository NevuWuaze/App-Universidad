import React from 'react';

const containerStyle = {
  backgroundColor: '#f7d8b6', // naranja claro como en la imagen
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 60px', // aumentar separación de los pointers
  color: '#666666', // gris medio
  fontSize: '14px',
  fontWeight: '500',
  userSelect: 'none',
  position: 'relative',
};



const arrowStyle = {
  cursor: 'pointer',
  fontSize: '15x',
  color: '#FF9800',
  userSelect: 'none',
};


const leftArrowStyle = {
  ...arrowStyle,
};

const rightArrowStyle = {
  ...arrowStyle,
};

const dateTextStyle = {
  flex: 1,
  textAlign: 'center',
};
function DateSelector({ currentDate, onPrevDay, onNextDay, formatDate }) {
  // Convert date text to uppercase
  const upperCaseDate = formatDate(currentDate).toUpperCase();

  return (
    <div style={containerStyle}>
      <div style={leftArrowStyle} onClick={onPrevDay} aria-label="Día anterior" role="button" tabIndex={0} onKeyPress={onPrevDay}>
        &#x25C0;
      </div>
      <div style={dateTextStyle}>{upperCaseDate}</div>
      <div style={rightArrowStyle} onClick={onNextDay} aria-label="Día siguiente" role="button" tabIndex={0} onKeyPress={onNextDay}>
        &#x25B6;
      </div>
    </div>
  );
}


export default DateSelector;
