// components/Location.jsx
import React from 'react';
import './Location.scss';

export const Location: React.FC = () => {
  return (
    <section id='local' className='section'>
      <h2>Onde estamos</h2>
      <p>Ginásio do Rina - Londrina</p>

      <iframe
        src='https://www.google.com/maps?q=londrina&output=embed'
        width='100%'
        height='300'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        style={{ border: 0 }}
        title='Localização Instituto Igapó'
      />
    </section>
  );
};
