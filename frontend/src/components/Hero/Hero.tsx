import React from 'react';
import './Hero.scss';

export const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <h1>Educação e Esporte caminhando juntos</h1>
      <p>Transformando vidas através do esporte e do conhecimento</p>
      <button className='btn-primary'>Participe</button>

      <div className='wave' />
    </section>
  );
};
