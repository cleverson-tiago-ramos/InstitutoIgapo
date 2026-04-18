// components/Header.tsx
import React from 'react';

import '@/styles/Header.scss';
import logo from '@/assets/logo_instituto.png';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        {/* LOGO */}
        <div className='header-left'>
          <img src={logo} alt='Instituto Igapó' className='logo' />
        </div>

        {/* MENU */}
        <nav className='nav'>
          <a href='#inicio'>Início</a>
          <a href='#sobre'>Sobre Nós</a>
          <a href='#atividades'>Atividades</a>
          <a href='#impacto'>Impacto</a>
          <a href='#contato'>Contato</a>
        </nav>

        {/* BOTÃO */}
        <div className='header-right'>
          <button className='btn-voluntario'>SEJA VOLUNTÁRIO</button>
        </div>
      </div>
    </header>
  );
};
