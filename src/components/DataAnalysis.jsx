import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';
import { rentalPrices, tourismArrivals, combinedMetrics } from '../data/metrics.js';

const chartContainer = 'rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur';

const DataAnalysis = () => (
  <section id="datos" className="container mx-auto space-y-16 px-6 py-24 md:px-12">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="space-y-4 text-center"
    >
      <h2 className="section-title">Análisis de datos</h2>
      <p className="section-subtitle mx-auto">
        Combinamos métricas oficiales del INE y el Ayuntamiento de Barcelona con estimaciones de plataformas como Airbnb y
        Eurostat para visualizar cómo los flujos turísticos han presionado al alza los precios de alquiler residencial.
      </p>
    </motion.div>

    <div className="grid gap-10 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`${chartContainer} lg:col-span-2`}
      >
        <h3 className="mb-4 text-xl font-semibold text-midnight">Precio medio del alquiler mensual (2010-2025)</h3>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={rentalPrices}>
            <CartesianGrid strokeDasharray="3 3" stroke="#CBD5F5" />
            <XAxis dataKey="year" stroke="#0F172A" tick={{ fontSize: 12 }} />
            <YAxis stroke="#0F172A" tickFormatter={(value) => `€${value}`} />
            <Tooltip formatter={(value) => [`€${value}`, 'Precio medio']} />
            <Line type="monotone" dataKey="price" stroke="#0077B6" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
        <p className="mt-4 text-sm text-slate-600">
          La tendencia ascendente se acelera a partir de 2014, con un breve retroceso durante la pandemia antes de alcanzar
          nuevos máximos en 2025.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={chartContainer}
      >
        <h3 className="mb-4 text-xl font-semibold text-midnight">Turistas alojados en la ciudad</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={tourismArrivals}>
            <CartesianGrid strokeDasharray="2 4" stroke="#E2E8F0" vertical={false} />
            <XAxis dataKey="year" stroke="#0F172A" tick={{ fontSize: 12 }} />
            <YAxis stroke="#0F172A" tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)}M`} />
            <Tooltip formatter={(value) => [`${(value / 1_000_000).toFixed(2)} M`, 'Turistas']} />
            <Bar dataKey="visitors" fill="#00B4D8" radius={[12, 12, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="mt-4 text-sm text-slate-600">
          La capacidad hotelera y de alquiler turístico superó los 10 millones de visitantes antes de la pandemia, y la
          recuperación pos-COVID ha mantenido la curva al alza.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={chartContainer}
      >
        <h3 className="mb-4 text-xl font-semibold text-midnight">Correlación turismo vs. renta</h3>
        <ResponsiveContainer width="100%" height={280}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#D6E4FF" />
            <XAxis dataKey="visitors" name="Turistas" tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)}M`} />
            <YAxis dataKey="price" name="Renta" tickFormatter={(value) => `€${value}`} />
            <ZAxis dataKey="revenuePerVisitor" range={[60, 180]} name="Ingresos por visitante" unit="€" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={combinedMetrics} fill="#0096C7" />
          </ScatterChart>
        </ResponsiveContainer>
        <p className="mt-4 text-sm text-slate-600">
          Cada punto representa un año: a mayor presión turística, mayor es el ingreso potencial por vivienda, incentivando
          la conversión de alquiler residencial en alquiler turístico.
        </p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-3xl bg-white/90 p-8 shadow-xl"
    >
      <h3 className="text-2xl font-semibold text-midnight">Factores clave detrás del aumento</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-mediterranean">Expansión de plataformas P2P</h4>
          <p className="text-sm text-slate-700">
            El auge de Airbnb y otras plataformas ha desviado miles de viviendas al mercado turístico, reduciendo la oferta de
            alquiler tradicional y encareciendo los contratos de larga duración.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-mediterranean">Presión de la inversión internacional</h4>
          <p className="text-sm text-slate-700">
            Los tipos de interés bajos en Europa y los programas de residencia han atraído capital extranjero en busca de
            rentabilidad, aumentando la especulación sobre el parque inmobiliario.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-mediterranean">Inflación y costes de construcción</h4>
          <p className="text-sm text-slate-700">
            El repunte inflacionario posterior a 2021 y el encarecimiento de materiales han elevado los costes de nuevos
            desarrollos, trasladándose parcialmente a los inquilinos.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-mediterranean">Regulación local</h4>
          <p className="text-sm text-slate-700">
            Aunque Barcelona ha reforzado las licencias turísticas, la aplicación es gradual y aún persisten viviendas
            irregulares que presionan los precios en barrios céntricos.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default DataAnalysis;
