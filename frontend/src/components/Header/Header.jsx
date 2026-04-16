// components/Header.jsx
import './Header.scss';
export default function Header() {
  return (
    <header className='header'>
      <img
        src='../../assets/logo.png'
        alt='Instituto de Educação Igapó'
        className='logo'
      />

      <nav>
        <a href='#sobre'>Sobre</a>
        <a href='#atividades'>Atividades</a>
        <a href='#local'>Local</a>
        <a href='#parceiros'>Parceiros</a>
      </nav>

      <button className='btn-primary'>Matrícula</button>
    </header>
  );
}
