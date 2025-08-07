import React, { useState, useEffect } from 'react';

const headerStyle = {
  background: 'linear-gradient(90deg, #f57c00, #fb8c00)', // naranja degradado
  color: 'white',
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 'bold',
  fontSize: '24px',
  textTransform: 'uppercase',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
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
};

const subtitleStyle = {
  fontSize: '13px', // Un poco más grande
  color: '#000', // Letras negras
  textAlign: 'center',
  padding: '8px 0',
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: '#fce7ce', // Fondo cálido
};

const academicBlockStyle = {
  backgroundColor: '#f5f0e6', // beige claro o crema
  padding: '16px',
  fontFamily: "'Roboto', sans-serif",
};

const academicTitleStyle = {
  color: '#333',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '12px',
  fontSize: '16px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontFamily: "'Roboto', sans-serif",
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd',
};

const tableCellLeft = {
  textAlign: 'left',
  padding: '8px 0',
  fontWeight: 'normal',
  fontSize: '14px',
  color: '#333',
};

const tableCellCenter = {
  textAlign: 'center',
  padding: '8px 0',
  fontWeight: 'normal',
  fontSize: '14px',
  color: '#333',
};

const tableCellRight = {
  textAlign: 'right',
  padding: '8px 0',
  fontWeight: 'normal',
  fontSize: '14px',
  color: '#333',
};

const separatorStyle = {
  backgroundColor: '#e0dcd3', // gris claro más oscuro que el fondo anterior
  padding: '8px 0',
  textAlign: 'center',
  color: '#555',
  fontSize: '12px',
  fontWeight: '300',
  textTransform: 'uppercase',
  fontFamily: "'Roboto', sans-serif",
};

const listStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontFamily: "'Roboto', sans-serif",
};

const listItemStyle = {
  backgroundColor: 'white',
  borderBottom: '1px solid #ddd',
  padding: '12px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '14px',
  color: '#333',
};

const editableInputStyle = {
  border: 'none',
  background: 'transparent',
  fontSize: '14px',
  color: '#333',
  width: '60px',
  textAlign: 'right',
  fontFamily: "'Roboto', sans-serif",
};

function Notas({ course, onClose }) {
  const storageKey = `notasData-${course.title}-${course.section}`;

  const [data, setData] = useState(() => {
    const defaultData = {
      updated: 'Hace 2 horas',
      academicPerformance: [
        { name: 'Evaluación Continua', percent: '100%', grade: '9' },
        { name: 'PROMEDIO FINAL', percent: '100%', grade: '9' },
      ],
      otherEvaluations: [
        { name: 'EVC', grade: '9' },
        { name: 'Examen escrito 1', grade: '11' },
        { name: 'Examen escrito 2', grade: '8' },
        { name: 'Ejercicio colaborativo', grade: '7' },
        { name: 'Examen escrito 3', grade: '10' },
      ],
    };
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : defaultData;
    } catch (error) {
      console.error(`Error al leer las notas para ${course.title} de localStorage`, error);
      return defaultData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(data));
    } catch (error) {
      console.error(`Error al guardar las notas para ${course.title} en localStorage`, error);
    }
  }, [data, storageKey, course.title]);

  const handleAcademicChange = (index, field, value) => {
    const newData = { ...data };
    newData.academicPerformance[index][field] = value;
    setData(newData);
  };

  const handleOtherEvalChange = (index, field, value) => {
    const newData = { ...data };
    newData.otherEvaluations[index][field] = value;
    setData(newData);
  };

  const handleUpdatedTextChange = (value) => {
    setData({ ...data, updated: value });
  };

  return (
    <div>
      <header style={headerStyle}>
        <div style={backArrowStyle} onClick={onClose}>&larr;</div>
        <div style={titleContainerStyle}>{course.title}</div>
      </header>
      <div style={subtitleStyle}>
        Actualizado:
        <input
          type="text"
          value={data.updated}
          onChange={(e) => handleUpdatedTextChange(e.target.value)}
          style={{
            border: 'none',
            background: 'transparent',
            color: '#000',
            fontSize: '13px',
            fontFamily: "'Roboto', sans-serif",
            width: '100px',
            marginLeft: '5px',
          }}
        />
      </div>

      <section style={academicBlockStyle}>
        <div style={academicTitleStyle}>Rendimiento académico</div>
        <table style={tableStyle}>
          <tbody>
            {data.academicPerformance.map((item, index) => (
              <tr key={index} style={tableRowStyle}>
                <td style={tableCellLeft}>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleAcademicChange(index, 'name', e.target.value)}
                    style={{ ...editableInputStyle, width: 'auto' }}
                  />
                </td>
                <td style={tableCellCenter}>
                  <input
                    type="text"
                    value={item.percent}
                    onChange={(e) => handleAcademicChange(index, 'percent', e.target.value)}
                    style={editableInputStyle}
                  />
                </td>
                <td style={tableCellRight}>
                  <input
                    type="text"
                    value={item.grade}
                    onChange={(e) => handleAcademicChange(index, 'grade', e.target.value)}
                    style={editableInputStyle}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div style={separatorStyle}>Otras evaluaciones</div>

      <ul style={listStyle}>
        {data.otherEvaluations.map((item, index) => (
          <li key={index} style={listItemStyle}>
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleOtherEvalChange(index, 'name', e.target.value)}
              style={{ ...editableInputStyle, textAlign: 'left', flexGrow: 1, width: 'auto' }}
            />
            <input
              type="text"
              value={item.grade}
              onChange={(e) => handleOtherEvalChange(index, 'grade', e.target.value)}
              style={editableInputStyle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notas;
