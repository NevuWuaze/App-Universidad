import React, { useState } from 'react';
import iconChecklist from '../assets/icons/icon-checklist.svg';
import logoFlor from '../assets/icons/logo/diploma.png';
import horarioIcon from '../assets/icons/horario.svg';
import aulaVirtualIcon from '../assets/icons/aula-virtual.svg';
import miUlimaIcon from '../assets/icons/mi-ulima.svg';
import SideMenu from './SideMenu';

import Maintenance from './Maintenance';
import AulaVirtual from './AulaVirtual';
import MiUlima from './MiUlima';

const headerContainerStyle = {
  backgroundColor: 'rgba(128, 128, 128, 0.1)', // gris tenue transparente
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1001,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const topBarStyle = {
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
  backgroundColor: '#f57c00', // fondo naranja solo en la barra superior
};

const menuButtonStyle = {
  fontSize: '24px',
  cursor: 'pointer',
  userSelect: 'none',
  color: '#fff',
  width: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const logoStyle = {
  height: '40px',
  objectFit: 'contain',
};

const checklistStyle = {
  height: '24px',
  objectFit: 'contain',
};

const bottomBarStyle = {
  height: '60px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#f57c00', // fondo naranja sólido para la barra inferior
};

const buttonStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#fff',
  fontSize: '12px',
  cursor: 'pointer',
  userSelect: 'none',
};

const iconButtonStyle = {
  height: '24px',
  marginBottom: '4px',
  objectFit: 'contain',
};

function TopButton({ icon, label, onClick }) {
  return (
    <div style={buttonStyle} onClick={onClick} role="button" tabIndex={0} onKeyPress={onClick}>
      <img src={icon} alt={label} style={iconButtonStyle} />
      <span>{label}</span>
    </div>
  );
}

function Header({ onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('horario'); // Por defecto mostrar Horario
  const [maintenanceSection, setMaintenanceSection] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      // Si ya está activa la sección, no cambiar para evitar re-render innecesario
      return;
    }
    setActiveSection(section);
    closeMenu();
  };

  const handleMenuItemClick = (label) => {
    // Cierra el menú y abre la pantalla de mantenimiento para el item seleccionado
    setMenuOpen(false);
    setMaintenanceSection(label);
  };

  let ActiveComponent;
  switch (activeSection) {
     case 'aulaVirtual':
      ActiveComponent = AulaVirtual;
      break;
    case 'miUlima':
      ActiveComponent = MiUlima;
      break;
    default:
      ActiveComponent = null;
  }

  return (
    <div style={headerContainerStyle}>
      <div style={topBarStyle}>
        <div style={menuButtonStyle} onClick={toggleMenu} aria-label="Abrir menú" role="button" tabIndex={0} onKeyPress={toggleMenu}>
          &#9776;
        </div>
        <img src={logoFlor} alt="Logo Flor" style={logoStyle} />
        <div
          style={{ ...menuButtonStyle, cursor: 'pointer' }} // Reutilizamos el estilo del botón de menú para consistencia
          onClick={() => setMaintenanceSection('Notificaciones')}
          role="button"
          tabIndex={0}
          aria-label="Abrir notificaciones"
        >
          <img src={iconChecklist} alt="Checklist" style={checklistStyle} />
        </div>
      </div>
      <div style={bottomBarStyle}>
        <TopButton icon={horarioIcon} label="HORARIO" onClick={() => handleSectionClick('horario')} />
        <TopButton icon={aulaVirtualIcon} label="AULA VIRTUAL" onClick={() => handleSectionClick('aulaVirtual')} />
        <TopButton icon={miUlimaIcon} label="MI ÚLIMA" onClick={() => handleSectionClick('miUlima')} />
      </div>
      {menuOpen && <SideMenu onClose={closeMenu} onItemClick={handleMenuItemClick} />}
      {ActiveComponent && <ActiveComponent />}
      {maintenanceSection && <Maintenance onClose={() => setMaintenanceSection(null)} sectionName={maintenanceSection} />}
    </div>
  );
}

export default Header;
