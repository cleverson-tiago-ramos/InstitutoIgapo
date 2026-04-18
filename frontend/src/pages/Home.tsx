import HeroSlider from '@/components/HeroSlider/HeroSlider';
import { About } from '@/components/About/About';
import { Activities } from '@/components/Activities/Activities';
import { Location } from '@/components/Location/Location';
import { Partners } from '@/components/Partners/Partners';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <About />
      <Activities />
      <Location />
      <Partners />
    </>
  );
}
