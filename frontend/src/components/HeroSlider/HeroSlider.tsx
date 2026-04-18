import { useState, useEffect, useRef } from 'react';
import '@/styles/HeroSlider/HeroSlider.scss';

import slide1 from '@/assets/img/heroSlider/foto1.png';
import image2 from '@/assets/img/heroSlider/image2.png';

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: 'Esporte para Todos',
    subtitle: 'Projeto Esportivo',
    highlight: 'Voleibol',
    description: 'Transformando vidas através do esporte e educação.',
    image: slide1,
  },
  {
    id: 2,
    title: 'Reforço Escolar',
    subtitle: 'Educação',
    highlight: 'Futuro',
    description: 'Apoio educacional para jovens da comunidade.',
    image: image2,
  },
  {
    id: 3,
    title: 'Ações Sociais',
    subtitle: 'Impacto',
    highlight: 'Social',
    description: 'Projetos que mudam realidades.',
    image: slide1,
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // autoplay inteligente (pausa no hover)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  // teclado (← →)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const next = () => setActive((p) => (p + 1) % slides.length);
  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);

  // parallax leve com o mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.setProperty('--mx', `${x}`);
    el.style.setProperty('--my', `${y}`);
  };

  const s = slides[active];

  return (
    <section
      ref={containerRef}
      className='hero'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onMouseMove={handleMouseMove}
    >
      {/* camadas de background para crossfade */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero-bg ${i === active ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className='overlay' />

      {/* CONTEÚDO */}
      <div key={s.id} className='hero-content'>
        <span className='subtitle'>{s.subtitle}</span>

        <h1 className='title'>
          {s.title} <br />
          <span>{s.highlight}</span>
        </h1>

        <p className='desc'>{s.description}</p>

        <div className='buttons'>
          <button className='btn-primary'>Ver mais</button>
          <button className='btn-outline'>Inscrever-se</button>
        </div>
      </div>

      {/* THUMBS */}
      <div className='hero-thumbs'>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`thumb ${index === active ? 'active' : ''}`}
            onClick={() => setActive(index)}
            aria-label={`Ir para ${slide.title}`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className='thumb-info'>
              <strong>{slide.title}</strong>
              <span>Ver</span>
            </div>
          </button>
        ))}
      </div>

      {/* NAV */}
      <div className='hero-nav'>
        <button onClick={prev} aria-label='Anterior'>
          ‹
        </button>
        <button onClick={next} aria-label='Próximo'>
          ›
        </button>
      </div>
    </section>
  );
}
