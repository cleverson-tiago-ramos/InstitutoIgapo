// components/Header.tsx
import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        {/* LOGO */}
        <img src={logo} alt='Instituto de Educação Igapó' className='logo' />

        {/* MENU */}
        <nav className='nav'>
          <a href='#sobre'>Sobre</a>
          <a href='#atividades'>Atividades</a>
          <a href='#local'>Local</a>
          <a href='#parceiros'>Parceiros</a>
        </nav>

        {/* BOTÃO */}
        <button className='btn-primary'>Matrícula</button>
      </div>
    </header>
  );
};
