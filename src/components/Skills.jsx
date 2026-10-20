import React from 'react';

export default function Skills() {
  const techList = ['React', 'Vite', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'CSS Modules', 'Git & GitHub', 'Python', 'Java'];

  return (
    <section id="skills" className="animate-fade" style={{ padding: '60px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', letterSpacing: '-0.01em', color: '#ffffff' }}>Stack & Tecnologias</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
        {techList.map((tech) => (
          <div key={tech} className="tech-tag" style={{ textAlign: 'center', padding: '14px' }}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}