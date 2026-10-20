import React from 'react';

export default function Skills() {
  const techList = ['React', 'Vite', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'CSS Modules', 'Git & GitHub', 'Python', 'Java'];

  return (
    <section id="skills" style={{ padding: '50px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '20px', letterSpacing: '-0.01em', color: '#ffffff' }}>Stack & Tecnologias</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
        {techList.map((tech) => (
          <div key={tech} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '12px 16px', borderRadius: '8px', fontSize: '14px', color: '#d4d4d8' }}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}