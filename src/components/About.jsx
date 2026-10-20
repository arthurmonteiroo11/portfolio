import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '50px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', letterSpacing: '-0.01em', color: '#ffffff' }}>Sobre Mim</h2>
      <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#a1a1aa', maxWidth: '700px' }}>
        Minha jornada na tecnologia une a resolução lógica de problemas com o desenvolvimento de experiências visuais refinadas. Tenho forte foco em React, Vite, arquitetura de componentes reutilizáveis e código limpo, sempre priorizando a fluidez e a usabilidade de ponta a ponta.
      </p>
    </section>
  );
}