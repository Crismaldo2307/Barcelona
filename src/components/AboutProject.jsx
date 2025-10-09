import { motion } from 'framer-motion';

const sources = [
  'Instituto Nacional de Estadística (INE)',
  'Ajuntament de Barcelona - Departament d’Estudis',
  'Inside Airbnb y AirDNA',
  'Eurostat - Índices de precios y PIB regional'
];

const AboutProject = () => (
  <section id="sobre" className="container mx-auto px-6 py-24 md:px-12">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white/85 p-10 shadow-xl"
    >
      <h2 className="section-title text-midnight">Sobre el proyecto</h2>
      <p className="section-subtitle">
        Renta y Turismo BCN es una iniciativa independiente que agrega datos públicos y privados para comprender cómo el
        turismo masivo, la economía global y la regulación influyen en la asequibilidad residencial. El objetivo es apoyar a
        periodistas, urbanistas y empresas en decisiones más informadas.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-mediterranean">Fuentes y metodología</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {sources.map((source) => (
              <li key={source} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-mediterranean"></span>
                <span>{source}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-mediterranean">Créditos</h3>
          <p className="text-sm text-slate-700">
            Investigación, diseño y desarrollo por <strong>Data Commons Barcelona</strong>. Escríbenos a
            <a href="mailto:hola@data-commons.barcelona" className="ml-1 underline">hola@data-commons.barcelona</a> para
            colaborar o solicitar un informe detallado.
          </p>
          <p className="text-sm text-slate-700">
            Este demo se puede desplegar en Vercel o GitHub Pages. El repositorio incluye scripts para clonar, instalar y
            construir el proyecto sin configuración adicional.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default AboutProject;
