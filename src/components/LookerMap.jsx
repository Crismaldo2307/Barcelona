import { motion } from 'framer-motion';

const LookerMap = () => (
  <section className="container mx-auto px-6 pb-20 md:px-12">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white/85 p-10 shadow-soft"
    >
      <h3 className="text-2xl font-semibold text-charcoal">Mapa de inmigración y renta promedio por distrito</h3>
      <p className="mt-3 max-w-3xl text-sm text-charcoal/80">
        Este mapa interactivo de Looker Studio integra padrones municipales y datos de mercado para evidenciar cómo la llegada
        de nueva población se concentra en ejes turísticos como Ciutat Vella, Eixample y Sant Martí, zonas donde el precio
        medio del alquiler supera los 1.400 € mensuales. Utiliza los filtros para comparar dinámicas y detectar brechas.
      </p>
      <div className="mt-6 overflow-hidden rounded-3xl border border-cloud/60 bg-beige/40 shadow-soft">
        <iframe
          width="600"
          height="450"
          src="https://lookerstudio.google.com/embed/reporting/c5a6bcc0-6c30-4456-80f8-aaff3b1803af/page/WSHdF"
          frameBorder="0"
          style={{ border: 0, width: '100%', height: '520px' }}
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          title="Mapa de inmigrantes y renta"
        ></iframe>
      </div>
    </motion.div>
  </section>
);

export default LookerMap;
