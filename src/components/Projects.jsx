import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="animate-fade" style={{ padding: '60px 0 80px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', letterSpacing: '-0.01em', color: '#ffffff' }}>Projetos em Destaque</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        <div className="glass-card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#ffffff' }}>Minimal Design System</h3>
            <a href="https://github.com/arthurmonteiro11/minimal-design-system" target="_blank" rel="noreferrer" style={{ fontSize: '13px', color: '#a1a1aa', textDecoration: 'underline', transition: 'color 0.2s' }}>Repositório ↗</a>
          </div>
          <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: '1.6', marginBottom: '24px' }}>
            Biblioteca de componentes em React e Vite construída com foco em design limpo, estados fluidos, estruturação modular com CSS Modules e painéis interativos integrados.
          </p>
          <div style={{ display: 'flex', gap: '10px', fontSize: '12px' }}>
            <span style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#a1a1aa' }}>React</span>
            <span style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#a1a1aa' }}>Vite</span>
            <span style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#a1a1aa' }}>CSS Modules</span>
          </div>
        </div>
      </div>
    </section>
  );
}