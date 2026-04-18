import { useState, useEffect, useRef, useCallback } from 'react';
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
  const [touchStart, setTouchStart] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 🚀 preload imagens
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [paused, next]);

  // teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // swipe mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  // parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.setProperty('--mx', `${x}`);
    el.style.setProperty('--my', `${y}`);
  };

  const current = slides[active];

  return (
    <section
      ref={containerRef}
      className='hero'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* BACKGROUND (render otimizado) */}
      <div
        className='hero-bg is-active'
        style={{ backgroundImage: `url(${current.image})` }}
      />

      <div className='overlay' />

      {/* TEXTO (sem key = sem flicker) */}
      <div className='hero-content'>
        <span className='subtitle'>{current.subtitle}</span>

        <h1 className='title'>
          {current.title} <br />
          <span>{current.highlight}</span>
        </h1>

        <p className='desc'>{current.description}</p>

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
          >
            <img src={slide.image} alt={slide.title} />
          </button>
        ))}
      </div>

      {/* NAV */}
      <div className='hero-nav'>
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>

      {/* DOTS */}
      <div className='hero-dots'>
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === active ? 'dot active' : 'dot'}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}
