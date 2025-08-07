import React, { useState, useRef } from 'react';
import CourseDetail from './CourseDetail';
import FAB from './FAB';

const aulaContainerStyle = {
  // Este contenedor se renderiza debajo de las barras del header y debe ser scrollable.
  backgroundColor: '#fff',
  height: 'calc(100vh - 120px)', // Altura del viewport menos los 120px de las barras de header
  overflowY: 'auto',
  position: 'relative', // Necesario para el posicionamiento del FAB
};

const listItemStyle = {
  borderBottom: '1px solid #ddd',
  padding: '12px 0',
  cursor: 'pointer',
};

const courseTitleStyle = {  
  fontWeight: '550', // Un poco menos grueso que 'bold'
  fontSize: '16px',
  marginBottom: '4px',
  color: '#444', // Un gris oscuro en lugar de negro puro
};

const courseSectionStyle = {
  color: '#777', // Un gris un poco más claro
  fontSize: '14px',
};

const editableCourseTitleStyle = {
  ...courseTitleStyle,
  border: 'none',
  borderBottom: '2px solid #f57c00',
  backgroundColor: 'transparent',
  outline: 'none',
  width: '80%',
  padding: '0',
};

const initialCourses = [
  { title: 'ÁLGEB.LINEAL', section: '2020', color: '#d32f2f' },
  { title: 'CÁLCULO I', section: '2030', color: '#fbc02d' },
  { title: 'INTROD. INGENIERÍA', section: '1140', color: '#388e3c' },
  { title: 'LENG.COMUNICACION II', section: '2008', color: '#0288d1' },
  { title: 'PROC.SOCIAL.POLITICO', section: '2019', color: '#1976d2' },
  { title: 'TEMAS FILOSOFIA', section: '2051', color: '#7b1fa2' },
];

const AulaVirtual = () => {
  const [courses, setCourses] = useState(() => {
    try {
      const savedCourses = localStorage.getItem('virtualCourses');
      return savedCourses ? JSON.parse(savedCourses) : initialCourses;
    } catch (error) {
      console.error("Error al leer los cursos de localStorage", error);
      return initialCourses;
    }
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const pressTimer = useRef();

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseDetail = () => {
    setSelectedCourse(null);
  };

  const handleEditToggle = () => {
    if (isEditing) {
      localStorage.setItem('virtualCourses', JSON.stringify(courses));
    }
    setIsEditing(!isEditing);
  };

  const handlePressStart = () => {
    pressTimer.current = setTimeout(() => {
      setIsEditing(true);
    }, 800); // 800ms para considerar un "long press"
  };

  const handlePressEnd = () => {
    clearTimeout(pressTimer.current);
  };

  const handleTitleChange = (newTitle, index) => {
    const updatedCourses = courses.map((course, i) =>
      i === index ? { ...course, title: newTitle } : course
    );
    setCourses(updatedCourses);
  };

  return (
    <div style={aulaContainerStyle}>
      {selectedCourse ? (
        <CourseDetail course={selectedCourse} onClose={handleCloseDetail} />
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {courses.map((course, index) => (
              <li
                key={index}
                style={{ ...listItemStyle, paddingLeft: '40px', position: 'relative' }}
                onClick={() => !isEditing && handleCourseClick(course)}
                onTouchStart={handlePressStart}
                onTouchEnd={handlePressEnd}
                onMouseDown={handlePressStart}
                onMouseUp={handlePressEnd}
                onMouseLeave={handlePressEnd}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: course.color,
                    display: 'inline-block',
                  }}
                ></span>
                {isEditing ? (
                  <input
                    type="text"
                    value={course.title}
                    onChange={(e) => handleTitleChange(e.target.value, index)}
                    style={editableCourseTitleStyle}
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <div style={courseTitleStyle}>{course.title}</div>
                )}
                <div style={courseSectionStyle}>Sección: {course.section}</div>
                <span
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '16px',
                    color: '#999',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  &#8250;
                </span>
              </li>
            ))}
          </ul>
          {isEditing && <FAB onClick={handleEditToggle} isEditing={isEditing} />}
        </>
      )}
    </div>
  );
};

export default AulaVirtual;
