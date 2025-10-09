import { motion } from 'framer-motion';

const Hero = () => (
  <section
    id="inicio"
    className="relative overflow-hidden bg-gradient-to-br from-mediterranean/90 to-midnight/80 text-white"
  >
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center opacity-60"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80')"
      }}
    />
    <div className="container mx-auto px-6 py-32 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl space-y-6"
      >
        <h1 className="text-4xl font-bold md:text-6xl">
          El impacto del turismo en el precio de la vivienda en Barcelona
        </h1>
        <p className="text-lg text-sand/90 md:text-xl">
          Explora la evolución del precio de la renta y su relación con el turismo.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#datos"
            className="rounded-full bg-white px-6 py-3 text-base font-semibold text-mediterranean shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-sand"
          >
            Ver datos
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            Contacto
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
