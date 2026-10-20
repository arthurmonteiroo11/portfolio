import React from 'react';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '50px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', letterSpacing: '-0.01em', color: '#ffffff' }}>Experiência Profissional</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid rgba(255, 255, 255, 0.08)', 
          borderRadius: '12px', 
          padding: '28px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '500', color: '#ffffff' }}>Auxiliar Administrativo & Financeiro</h3>
            <span style={{ fontSize: '13px', color: '#71717a' }}>Atual</span>
          </div>
          <p style={{ fontSize: '14px', color: '#a1a1aa', marginBottom: '16px' }}>Instituto Meninos de São Judas Tadeu</p>
          <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: '1.6', marginBottom: '20px' }}>
            Atuação na gestão de rotinas financeiras e administrativas, controle de documentos, lançamentos em ERP, conferência de notas fiscais e suporte em processos de prestação de contas.
          </p>
          <div style={{ display: 'flex', gap: '10px', fontSize: '12px' }}>
            <span style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: '#a1a1aa' }}>Gestão Financeira</span>
            <span style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: '#a1a1aa' }}>ERP Senior</span>
            <span style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: '#a1a1aa' }}>Processos Administrativos</span>
          </div>
        </div>
      </div>
    </section>
  );
}