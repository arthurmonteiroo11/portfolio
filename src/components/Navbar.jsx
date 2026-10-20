import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '36px 0' }}>
      <span style={{ fontSize: '15px', fontWeight: '500', letterSpacing: '-0.01em', color: '#ffffff' }}>arthur monteiro</span>
      <div style={{ display: 'flex', gap: '28px', fontSize: '14px', color: '#a1a1aa' }}>
        <a href="#about" style={{ transition: 'color 0.2s' }}>Sobre</a>
        <a href="#projects" style={{ transition: 'color 0.2s' }}>Projetos</a>
        <a href="#skills" style={{ transition: 'color 0.2s' }}>Skills</a>
        <a href="https://github.com/arthurmonteiro11" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/arthurmonteiroo" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </nav>
  );
}