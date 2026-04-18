// components/Activities.tsx
import React from 'react';
import '@/styles/Activities.scss';
export const Activities: React.FC = () => {
  return (
    <section id='atividades' className='section'>
      <h2>Nossas Atividades</h2>

      <div className='cards'>
        <div className='card'>⚽ Futsal</div>
        <div className='card'>📚 Reforço Escolar</div>
        <div className='card'>🤝 Ações Sociais</div>
      </div>
    </section>
  );
};
