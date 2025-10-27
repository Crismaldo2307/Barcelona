import { motion } from 'framer-motion';

const Hero = ({ onNavigate }) => (
  <section
    id="inicio"
    className="relative overflow-hidden bg-gradient-to-br from-olive/85 via-tealnight/80 to-charcoal/80 text-white"
  >
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center opacity-60"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=1600&q=80')"
      }}
      aria-hidden
    />
    <div className="container mx-auto px-6 py-28 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl space-y-6"
      >
        <p className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em]">
          Análisis del aumento del precio del alquiler en Barcelona (2014-2025)
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Datos urbanos para entender cómo turismo y comercio transforman la vivienda
        </h1>
        <p className="text-lg text-beige/90 md:text-xl">
          Exploramos series históricas, indicadores comerciales y mapas de inmigración para explicar la presión creciente
          sobre el mercado de alquiler. Usa nuestras visualizaciones interactivas y conversa con la IA para profundizar.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => onNavigate('/busqueda')}
            className="rounded-full bg-white px-6 py-3 text-base font-semibold text-charcoal shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-beige"
          >
            Ver dashboards
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/', { anchor: 'contacto' })}
            className="rounded-full border border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            Contactar expertos
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
