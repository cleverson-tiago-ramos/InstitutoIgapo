// frontend/src/components/About/About.tsx
import React from 'react';

import '@/styles/About.scss';

export const About: React.FC = () => {
  return (
    <section id='sobre' className='section'>
      <h2>Quem Somos</h2>
      <p>
        O Instituto de Educação Igapó promove educação, esporte e inclusão
        social no Jardim Campos Elíseos, em Londrina.
      </p>
    </section>
  );
};
