import React, { useState } from 'react';
import Header from './Header';
import DateSelector from './DateSelector';
import Schedule from './Schedule';

const containerStyle = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  height: '180vh',
  display: 'flex',
  flexDirection: 'column',
};

const headerAndDateSelectorHeight = 70; // altura combinada de Header y DateSelector

const scheduleContainerStyle = {
  flex: 1,
  overflowY: 'auto',
  paddingTop: `${headerAndDateSelectorHeight}px`,
  boxSizing: 'border-box',
};

function MainScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('es-ES', options);
  };

  const goPrevDay = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(prevDate);
  };

  const goNextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  return (
    <div style={containerStyle}>
      <Header onMenuClick={toggleMenu} />
      <DateSelector currentDate={currentDate} onPrevDay={goPrevDay} onNextDay={goNextDay} formatDate={formatDate} />
      <div style={scheduleContainerStyle}>
        <Schedule />
      </div>
    </div>
  );
}

export default MainScreen;
