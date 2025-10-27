import { motion } from 'framer-motion';

const ProjectSummary = () => (
  <section className="container mx-auto px-6 py-16 md:px-12">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl rounded-3xl bg-white/80 p-10 shadow-soft"
    >
      <h2 className="section-title text-center">Radiografía del mercado de alquiler barcelonés</h2>
      <p className="section-subtitle mx-auto text-center">
        Desde 2014 el alquiler medio en Barcelona ha escalado casi un 75%. Nuestro laboratorio urbano combina registros
        municipales, transacciones comerciales y señales digitales para entender la relación entre la presión turística, el
        dinamismo comercial y el acceso a la vivienda.
      </p>
      <div className="mt-10 space-y-6 text-charcoal/85">
        <div className="overflow-hidden rounded-3xl">
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1920/1080' }}>
            <iframe
              src="https://share.synthesia.io/embeds/videos/26b3ea86-dac0-4435-91f5-f69ac75740c1"
              loading="lazy"
              title="Synthesia video player - Desentrañando el Alquiler en Barcelona: Un Análisis de Datos Revelador"
              allowFullScreen
              allow="encrypted-media; fullscreen; microphone;"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0,
                overflow: 'hidden'
              }}
            ></iframe>
          </div>
        </div>
        <p>
          El repunte de precios coincide con un aumento sostenido de la demanda turística internacional y del gasto en
          comercios orientados a visitantes. Los barrios con mayor densidad de alojamientos turísticos han visto crecer sus
          rentas un 12% más rápido que la media gracias al desvío de vivienda habitual hacia estancias de corta duración.
        </p>
        <p>
          A la par, el dinamismo comercial —incremento de licencias de restauración, comercios premium y experiencias
          inmersivas— refuerza la atracción de flujos turísticos y eleva el consumo diario. Este ciclo realimenta el valor del
          suelo urbano y presiona a residentes y negocios tradicionales que compiten por espacios cada vez más caros.
        </p>
      </div>
    </motion.div>
  </section>
);

export default ProjectSummary;
