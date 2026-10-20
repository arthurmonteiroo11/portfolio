import React from 'react';

export default function Hero() {
  return (
    <section style={{ padding: '70px 0 50px 0' }}>
      <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '20px', fontSize: '13px', color: '#a1a1aa', marginBottom: '20px' }}>
        Disponível para Oportunidades & Estágio
      </div>
      <h1 style={{ fontSize: '44px', fontWeight: '600', letterSpacing: '-0.03em', lineHeight: '1.2', marginBottom: '20px', color: '#ffffff' }}>
        Front-end Developer <span style={{ color: '#71717a' }}>& Computer Science Student</span>
      </h1>
      <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#a1a1aa', maxWidth: '620px', marginBottom: '36px' }}>
        Desenvolvo interfaces web modernas, focadas em performance, micro-interações fluidas e código limpo. Estudando Ciência da Computação na UNINOVE e atuando na área financeira no Instituto Meninos de São Judas Tadeu.
      </p>
      <div style={{ display: 'flex', gap: '14px' }}>
        <a 
          href="#projects" 
          style={{ 
            background: '#f4f4f5', 
            color: '#09090b', 
            padding: '11px 22px', 
            borderRadius: '6px', 
            fontSize: '14px', 
            fontWeight: '500',
            transition: 'opacity 0.2s'
          }}
        >
          Ver Projetos
        </a>
        <a 
          href="mailto:arthur.silvamonteiro@hotmail.com" 
          style={{ 
            background: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            color: '#f4f4f5', 
            padding: '11px 22px', 
            borderRadius: '6px', 
            fontSize: '14px', 
            fontWeight: '500'
          }}
        >
          Entrar em Contato
        </a>
      </div>
    </section>
  );
}