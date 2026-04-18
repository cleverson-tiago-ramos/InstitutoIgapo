// src/components/Partners.tsx
import React from 'react';

import '@/styles/Partners.scss';

export const Partners: React.FC = () => {
  return (
    <section id='parceiros' className='section'>
      <h2>Parceiros</h2>

      <div className='partners'>
        <div className='partner'>Empresa 1</div>
        <div className='partner'>Empresa 2</div>
      </div>
    </section>
  );
};
