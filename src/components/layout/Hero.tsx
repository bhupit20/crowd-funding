import { ReactNode } from 'react';

export interface HeroProps {
  title?: ReactNode;
  text?: ReactNode;
  button?: ReactNode;
}

const Hero = ({ title, text, button }: HeroProps) => {
  return (
    <section
      className="hero min-h-[calc(100vh-64px)]"
      style={{
        backgroundImage: 'url(/hero-background.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{text}</p>
          {button}
        </div>
      </div>
    </section>
  );
};

export default Hero;
