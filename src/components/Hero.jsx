import React from 'react';

export default function Hero() {
  return (
    <section className="animate-fade" style={{ padding: '80px 0 60px 0' }}>
      <div style={{ display: 'inline-block', padding: '5px 14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', fontSize: '13px', color: '#a1a1aa', marginBottom: '24px' }}>
        Disponível para Oportunidades & Estágio
      </div>
      <h1 style={{ fontSize: '48px', fontWeight: '600', letterSpacing: '-0.03em', lineHeight: '1.15', marginBottom: '20px', color: '#ffffff' }}>
        Front-end Developer <span style={{ color: '#52525b' }}>& Computer Science Student</span>
      </h1>
      <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#a1a1aa', maxWidth: '640px', marginBottom: '40px' }}>
        Desenvolvo interfaces web modernas, focadas em performance, micro-interações fluidas e código limpo. Estudando Ciência da Computação na UNINOVE e atuando na área financeira no Instituto Meninos de São Judas Tadeu.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <a href="#projects" className="btn-primary">
          Ver Projetos
        </a>
        <a href="mailto:arthur.silvamonteiro@hotmail.com" className="btn-secondary">
          Entrar em Contato
        </a>
      </div>
    </section>
  );
}