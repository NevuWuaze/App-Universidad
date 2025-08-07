import React from 'react';
import diplomaLogo from '../assets/icons/logo/diploma.png';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(128, 128, 128, 0.5)', // fondo gris con transparencia
  zIndex: 1001,
};

const containerStyle = {
  width: '280px',
  height: '100vh',
  backgroundColor: '#fff',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1002,
};

const headerStyle = {
  backgroundColor: '#f57c00',
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  color: '#fff',
  fontFamily: "'Times New Roman', serif",
  fontWeight: 'bold',
  fontSize: '20px',
  userSelect: 'none',
};

const logoStyle = {
  maxWidth: '100%',
  maxHeight: '80px',
  objectFit: 'contain',
};

const closeButtonStyle = {
  display: 'none',
};

const menuListStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
  flex: 1,
  overflowY: 'auto',
  backgroundColor: '#fff',
};

const menuItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '12px 20px',
  cursor: 'pointer',
  color: '#666',
  fontSize: '16px',
  borderBottom: '1px solid #eee',
  userSelect: 'none',
};

const iconContainerStyle = {
  width: '24px',
  height: '24px',
  marginRight: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#666', // Color gris para los íconos
};

// --- Iconos para el menú ---
const IntranetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const CafeteriaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);

const EventosIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const PromocionesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

const RepositorioIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const NoticiasIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const EntrevistasIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

const AgendaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
);

const MapaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);

const RedesSocialesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

const AyudaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const MembresiaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const menuItems = [
  { label: 'Intranet', icon: <IntranetIcon /> },
  { label: 'Cafeterías', icon: <CafeteriaIcon /> },
  { label: 'Eventos', icon: <EventosIcon /> },
  { label: 'Promociones', icon: <PromocionesIcon /> },
  { label: 'Repositorio', icon: <RepositorioIcon /> },
  { label: 'Noticias', icon: <NoticiasIcon /> },
  { label: 'Entrevistas', icon: <EntrevistasIcon /> },
  { label: 'Agenda', icon: <AgendaIcon /> },
  { label: 'Mapa', icon: <MapaIcon /> },
  { label: 'Redes Sociales', icon: <RedesSocialesIcon /> },
  { label: 'Ayuda', icon: <AyudaIcon /> },
  { label: 'Membresía', icon: <MembresiaIcon /> },
];

function SideMenu({ onClose, onItemClick }) {
  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={containerStyle}>
        <div style={headerStyle}>
          <img src={diplomaLogo} alt="Logo Universidad de Lima" style={logoStyle} />
          <div>UNIVERSIDAD DE LIMA</div>
          <div style={closeButtonStyle} onClick={onClose} role="button" tabIndex={0} onKeyPress={onClose} aria-label="Cerrar menú">
            &#x2715;
          </div>
        </div>
        <ul style={menuListStyle}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              style={menuItemStyle}
              onClick={() => onItemClick && onItemClick(item.label)}
            >
              <div style={iconContainerStyle}>
                {/* Renderiza el ícono solo si no es el placeholder de texto */}
                {item.icon !== 'icon-placeholder' ? item.icon : null}
              </div>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
