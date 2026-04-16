// components/Location.jsx
import './Location.scss';
export default function Location() {
  return (
    <section id='local' className='section'>
      <h2>Onde estamos</h2>
      <p>Ginásio do Rina - Londrina</p>

      <iframe
        src='https://www.google.com/maps?q=londrina&output=embed'
        width='100%'
        height='300'
      ></iframe>
    </section>
  );
}
