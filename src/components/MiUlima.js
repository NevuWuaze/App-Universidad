import React, { useState, useRef, useEffect } from 'react';
import Pagos from './pagos';
import Horario from './horario';
import Maintenance from './Maintenance';

const containerStyle = {
  paddingTop: '120px', // espacio para el header fijo
  paddingLeft: '20px',
  paddingRight: '20px',
  backgroundColor: '#ffe6cc',
  minHeight: '100vh',
  fontFamily: "'Arial', sans-serif",
};

const profileSectionStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const profileImageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  margin: '0 auto 10px',
  // Añadido para mostrar la imagen
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  cursor: 'pointer', // Para indicar que es clickeable
};

const studentNameStyle = {
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#6d4c41',
};

const studentIdStyle = {
  fontSize: '14px',
  color: '#6d4c41',
  marginBottom: '20px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  backgroundColor: '#fff',
  borderRadius: '4px',
  overflow: 'hidden',
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '12px 20px',
  borderBottom: '1px solid #ddd',
  cursor: 'pointer',
  color: '#6d4c41',
  fontSize: '16px',
};

const iconContainerStyle = {
  width: '24px',
  height: '24px',
  marginRight: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// --- Iconos para el menú ---
const IdCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6d4c41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M6 10h4" />
    <path d="M6 14h12" />
    <path d="M14 10h4" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6d4c41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6d4c41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const menuItems = [
  { id: 'carne', label: 'Carné', icon: <IdCardIcon /> },
  { id: 'horario', label: 'Horario', icon: <CalendarIcon /> },
  { id: 'pagos', label: 'Pagos', icon: <CreditCardIcon /> },
];

function MiUlima() {
  const storageKey = 'miUlimaProfileImage';
  const fileInputRef = useRef(null);

  const [activeView, setActiveView] = useState(null);
  const [maintenanceSection, setMaintenanceSection] = useState(null);

  const [profileImage, setProfileImage] = useState(() => {
    try {
      return localStorage.getItem(storageKey) || null;
    } catch (error) {
      console.error("Error al leer la imagen de perfil de localStorage", error);
      return null;
    }
  });

  useEffect(() => {
    try {
      if (profileImage) {
        localStorage.setItem(storageKey, profileImage);
      } else {
        localStorage.removeItem(storageKey);
      }
    } catch (error) {
      console.error("Error al guardar la imagen de perfil en localStorage", error);
    }
  }, [profileImage]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileClick = () => {
    fileInputRef.current.click();
  };

  const handleItemClick = (itemId) => {
    if (itemId === 'pagos' || itemId === 'horario') {
      setActiveView(itemId);
    } else {
      // Para 'Carné' y otros futuros, mostramos mantenimiento
      setMaintenanceSection(itemId === 'carne' ? 'Carné' : itemId);
    }
  };

  const dynamicProfileImageStyle = {
    ...profileImageStyle,
    backgroundImage: profileImage ? `url(${profileImage})` : 'none',
  };

  if (maintenanceSection) {
    return <Maintenance onClose={() => setMaintenanceSection(null)} sectionName={maintenanceSection} />;
  }

  if (activeView === 'pagos') {
    return <Pagos onClose={() => setActiveView(null)} />;
  }

  if (activeView === 'horario') {
    return <Horario onClose={() => setActiveView(null)} />;
  }

  return (
    <div style={containerStyle}>
      <div style={profileSectionStyle}>
        <div
          style={dynamicProfileImageStyle}
          onClick={handleProfileClick}
          role="button"
          tabIndex="0"
          aria-label="Cambiar foto de perfil"
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleImageChange}
        />
        <div style={studentNameStyle}>ORTEGA NINA MILWARD RUDDY</div>
        <div style={studentIdStyle}>20245651</div>
      </div>
      <ul style={listStyle}>
        {menuItems.map((item, index) => (
          <li key={index} style={listItemStyle} onClick={() => handleItemClick(item.id)}>
            <div style={iconContainerStyle}>{item.icon}</div>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MiUlima;
