import { useState, useEffect, useRef, useCallback } from 'react';
import '@/styles/HeroSlider/HeroSlider.scss';

import slide1 from '@/assets/img/heroSlider/foto1.png';
import image2 from '@/assets/img/heroSlider/image2.png';
import image3 from '@/assets/img/heroSlider/image3.png';
import image4 from '@/assets/img/heroSlider/image4.png';

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
    title: 'Projeto Esportivo',
    subtitle: 'Inclusão através do esporte',
    highlight: 'Voleibol',
    description:
      'O voleibol como ferramenta de transformação social, promovendo disciplina, saúde e oportunidades para nossos jovens.',
    image: slide1,
  },
  {
    id: 2,
    title: 'Ações Sociais',
    subtitle: 'Cuidando da comunidade',
    highlight: 'Solidariedade',
    description:
      'Realizamos ações que fortalecem famílias, levando apoio, acolhimento e esperança para quem mais precisa.',
    image: image2,
  },
  {
    id: 3,
    title: 'Projeto Esportivo',
    subtitle: 'Disciplina e respeito',
    highlight: 'Judô',
    description:
      'O judô ensina valores como respeito, foco e superação, ajudando a formar cidadãos preparados para o futuro.',
    image: image3,
  },
  {
    id: 4,
    title: 'Nossa Missão',
    subtitle: 'Transformação real',
    highlight: 'Comunidade',
    description:
      'A presidente Marilza da Luz acredita que a única maneira de transformar nossa comunidade é através de nós mesmos, com união, educação e oportunidades.',
    image: image4,
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      {/* BACKGROUND */}
      <div
        className='hero-bg is-active'
        style={{ backgroundImage: `url(${current.image})` }}
      />

      <div className='overlay' />

      {/* TEXTO */}
      <div className={`hero-content fade-${active}`}>
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
            <img src={slide.image} />
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
