import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, Sector } from 'recharts';
import Maintenance from './Maintenance';
import Notas from './Notas';

const initialData = [
  { name: '✔ Asistencia', value: 64, color: '#4caf50' },
  { name: '× Faltas', value: 22, color: '#f44336' },
  { name: '= Restante', value: 14, color: '#ccc' },
];

const containerStyle = {
  padding: '20px 0', // Padding vertical, sin padding horizontal
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: 'rgb(254 247 238)',
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '20px',
  padding: '0 20px', // Añadido padding horizontal
};

const labelStyle = {
  display: 'flex',
  justifyContent: 'center', // Centra el contenido para juntar ícono y valor
  alignItems: 'center', // Clave: alinea verticalmente el texto y el input
  padding: '6px 0',      // Añade espacio vertical para que no se vea amontonado
  gap: '15px', // Espacio entre el ícono y el valor
};

const backArrowStyle = {
  cursor: 'pointer',
  marginRight: '15px', // Reducido para un mejor espaciado
  color: '#f57c00', // Naranja temático
  userSelect: 'none',
  // Contenedor para centrar perfectamente el icono SVG
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
};

const attendanceTitleStyle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#555',
  textTransform: 'uppercase',
  marginBottom: '15px',
  textAlign: 'center',
};

const attendanceValueStyle = {
  fontSize: '20px',
  fontWeight: '450', // Menos grueso
};

const attendanceInputStyle = {
  fontSize: '22px',
  fontWeight: '450', // Menos grueso
  textAlign: 'center',
  width: '50px',
  border: 'none',
  borderBottom: '2px solid #f57c00',
  background: 'transparent',
  outline: 'none',
  color: '#333',
  padding: '0',
};

const updatedTextStyle = {
  fontSize: '12px',
  color: '#999',
  textAlign: 'center',
  marginTop: '25px',
  marginBottom: '10px',
  padding: '0 20px', // Añadido padding horizontal
};

const actionsContainerStyle = {
  backgroundColor: '#fff',
  // Se quita el borde redondeado y la sombra para que ocupe todo el ancho
  overflow: 'hidden',
};

const actionItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '28px 20px', // Aumentado para hacer los botones más grandes
  cursor: 'pointer',
  borderBottom: '1px solid #f0f0f0',
};

const actionIconContainerStyle = {
  marginRight: '20px', // Aumentado para más espacio
  display: 'flex',
  alignItems: 'center',
  color: '#888', // Color gris para los íconos
};

const actionLabelStyle = {
  flexGrow: 1,
  color: '#333',
  fontSize: '18px', // Ligeramente más grande
};

const actionArrowStyle = {
  fontSize: '24px',
  color: '#ccc',
  fontWeight: 'lighter',
};

// --- Iconos para los botones de acción ---
const MedalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21a9 9 0 0 1-9-9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a9 9 0 0 1-9 9z" />
    <path d="m9 11 3 3 7-7" />
  </svg>
);
const AcademicCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5" />
  </svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// --- Iconos para la asistencia ---
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f44336" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const EqualIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="9" x2="19" y2="9"></line>
    <line x1="5" y1="15" x2="19" y2="15"></line>
  </svg>
);

function CourseDetail({ course, onClose }) {
  // Inicializa el estado desde localStorage o usa los datos iniciales por defecto.
  const [data, setData] = useState(() => {
    try {
      const storageKey = `course-hours-${course.title}-${course.section}`;
      const savedDataJSON = localStorage.getItem(storageKey);
      return savedDataJSON ? JSON.parse(savedDataJSON) : initialData;
    } catch (error) {
      console.error("Error al leer de localStorage:", error);
      return initialData;
    }
  });
  const [editing, setEditing] = useState(false);
  const [maintenanceSection, setMaintenanceSection] = useState(null);
  const [showNotas, setShowNotas] = useState(false);

  // Efecto para actualizar los datos si la propiedad 'course' cambia (al seleccionar otro curso).
  useEffect(() => {
    try {
      const storageKey = `course-hours-${course.title}-${course.section}`;
      const savedDataJSON = localStorage.getItem(storageKey);
      if (savedDataJSON) {
        setData(JSON.parse(savedDataJSON));
      } else {
        setData(initialData); // Restablece a los valores por defecto para el nuevo curso.
      }
    } catch (error) {
      console.error("Error al leer de localStorage:", error);
      setData(initialData);
    }
  }, [course]);

  // Calculate total hours for percentage calculation
  const totalHours = data.reduce((acc, item) => acc + item.value, 0);

  // Handle input change for editable fields
  const handleValueChange = (index, newValue) => {
    const numericValue = Number(newValue);
    if (isNaN(numericValue) || numericValue < 0) return;

    const newData = data.map((item, i) => {
      return i === index ? { ...item, value: numericValue } : item;
    });

    const sumOfFirstTwo = newData[0].value + newData[1].value;
    newData[2] = { ...newData[2], value: totalHours - sumOfFirstTwo };
    setData(newData);
  };

  // Cambia el modo de edición y guarda los datos al salir del modo de edición.
  const handleEditToggle = () => {
    if (editing) {
      const storageKey = `course-hours-${course.title}-${course.section}`;
      localStorage.setItem(storageKey, JSON.stringify(data));
    }
    setEditing(!editing);
  };

  // Animate pie chart on mount
  const [activeIndex, setActiveIndex] = useState(-1);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setActiveIndex(i);
      i++;
      if (i > data.length) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, [data.length]);

  const actionButtons = [
    { label: 'Notas', icon: <MedalIcon /> },
    { label: 'Asesorías', icon: <AcademicCapIcon /> },
    { label: 'Contactos', icon: <UsersIcon /> },
  ];

  const handleActionClick = (label) => {
    if (label === 'Notas') {
      setShowNotas(true);
    } else {
      setMaintenanceSection(label);
    }
  };

  // Si showNotas es true, renderiza el componente de Notas en su lugar.
  if (showNotas) {
    return <Notas course={course} onClose={() => setShowNotas(false)} />;
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div
          style={backArrowStyle}
          onClick={onClose}
          role="button"
          tabIndex={0}
          aria-label="Volver"
        >
          {/* Icono SVG para una flecha más nítida y mejor alineada */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <div>{course.title} - Sección: {course.section}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', padding: '0 20px' }}>
        {/* Columna Izquierda: Detalles y Botones */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div>
            <div style={attendanceTitleStyle}>Asistencia</div>
            {data.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div style={labelStyle}>
                    {index === 0 ? <CheckIcon /> :
                     index === 1 ? <XIcon /> :
                     <EqualIcon />}
                    {editing && index < 2 ? (
                      <input
                        type="number"
                        min="0"
                        value={item.value}
                        onChange={(e) => handleValueChange(index, e.target.value)}
                        style={attendanceInputStyle}
                      />
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                        <span style={attendanceValueStyle}>{item.value}</span>
                        <span style={{ fontSize: '17px', color: '#000000' }}>Horas</span>
                      </span>
                    )}
                  </div>
                  {index === 1 && <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '10px 0' }} />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        {/* Columna Derecha: Gráfico */}
        <div style={{ flex: 1.5 }}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={90}
                fill="#8884d8"
                activeIndex={activeIndex}
                activeShape={(props) => {
                  const RADIAN = Math.PI / 180;
                  const {
                    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
                    fill, payload, value,
                  } = props;
                  const sin = Math.sin(-RADIAN * midAngle);
                  const cos = Math.cos(-RADIAN * midAngle);
                  const sx = cx + (outerRadius + 10) * cos;
                  const sy = cy + (outerRadius + 10) * sin;
                  const mx = cx + (outerRadius + 30) * cos;
                  const my = cy + (outerRadius + 30) * sin;
                  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
                  const ey = my;
                  const textAnchor = cos >= 0 ? 'start' : 'end';

                  return (
                    <g>
                      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontWeight="bold">{payload.name}</text>
                      <Sector
                        cx={cx}
                        cy={cy}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius + 6}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        fill={fill}
                      />
                      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value} horas`}</text>
                    </g>
                  );
                }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {/* Círculo invisible en el centro para activar/desactivar la edición */}
              <g onClick={handleEditToggle} style={{ cursor: 'pointer' }}>
                <circle cx="50%" cy="50%" r={45} fill="transparent" />
              </g>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={updatedTextStyle}>Actualizado: Ahora</div>

      <div style={actionsContainerStyle}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {actionButtons.map((button, index) => (
            <li
              key={button.label}
              style={{ ...actionItemStyle, borderBottom: index === actionButtons.length - 1 ? 'none' : '1px solid #f0f0f0' }}
              onClick={() => handleActionClick(button.label)}
            >
              <div style={actionIconContainerStyle}>{button.icon}</div>
              <span style={actionLabelStyle}>{button.label}</span>
              <span style={actionArrowStyle}>&#8250;</span>
            </li>
          ))}
        </ul>
      </div>
      {maintenanceSection && <Maintenance onClose={() => setMaintenanceSection(null)} sectionName={maintenanceSection} />}
    </div>
  );
}

export default CourseDetail;
