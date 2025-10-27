import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  Bar,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';
import { rentalPrices, tourismCommerce, correlationMetrics } from '../data/metrics.js';

const chartCard = 'rounded-3xl bg-white/85 p-6 shadow-soft backdrop-blur';

const DataAnalysis = () => (
  <section id="datos" className="container mx-auto space-y-16 px-6 py-20 md:px-12">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="space-y-4 text-center"
    >
      <h2 className="section-title">Indicadores clave 2014-2025</h2>
      <p className="section-subtitle mx-auto">
        Las visualizaciones combinan registros del INCASÒL, el Ayuntamiento de Barcelona, el Instituto de Turismo de España y
        paneles de consumo con tarjetas bancarias. Interactúa con cada punto para conocer valores exactos.
      </p>
    </motion.div>

    <div className="grid gap-10 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className={`${chartCard} lg:col-span-2`}
      >
        <h3 className="mb-4 text-xl font-semibold text-charcoal">Precio medio del alquiler mensual</h3>
        <ResponsiveContainer width="100%" height={340}>
          <LineChart data={rentalPrices}>
            <CartesianGrid strokeDasharray="3 3" stroke="#CBD5D2" />
            <XAxis dataKey="year" stroke="#27313B" tick={{ fontSize: 12 }} />
            <YAxis stroke="#27313B" tickFormatter={(value) => `€${value}`} />
            <Tooltip
              formatter={(value) => [`€${value}`, 'Precio medio']}
              contentStyle={{ borderRadius: 16, borderColor: '#E8E8E4' }}
            />
            <Line type="monotone" dataKey="price" stroke="#8A9A5B" strokeWidth={3} dot={{ r: 5, strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
        <p className="mt-4 text-sm text-charcoal/80">
          La curva evidencia un crecimiento sostenido con un punto de inflexión en 2020. Tras la corrección provocada por la
          pandemia, la recuperación turística impulsa un nuevo máximo histórico en 2025, situando la renta media por encima de
          los 1.490 €.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={chartCard}
      >
        <h3 className="mb-4 text-xl font-semibold text-charcoal">Turismo y dinamismo comercial</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={tourismCommerce}>
            <CartesianGrid strokeDasharray="2 4" stroke="#D7D8D0" />
            <XAxis dataKey="year" stroke="#27313B" tick={{ fontSize: 12 }} />
            <YAxis
              yAxisId="left"
              stroke="#27313B"
              tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)} M`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#27313B"
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              formatter={(value, name) => {
                if (name === 'visitors') {
                  return [`${(value / 1_000_000).toFixed(2)} millones`, 'Turistas'];
                }
                if (name === 'commerceIndex') {
                  return [`Índice ${value}`, 'Comercio orientado a turismo (2014=100)'];
                }
                return [`€${Math.round(value)}M`, 'Gasto con tarjetas'];
              }}
              contentStyle={{ borderRadius: 16, borderColor: '#E8E8E4' }}
            />
            <Bar yAxisId="left" dataKey="visitors" fill="#AFC8A6" radius={[12, 12, 0, 0]} />
            <Line yAxisId="right" type="monotone" dataKey="commerceIndex" stroke="#2C4A52" strokeWidth={3} />
          </ComposedChart>
        </ResponsiveContainer>
        <p className="mt-4 text-sm text-charcoal/80">
          El flujo turístico pasó de 8,5 a 11,3 millones de visitantes en una década. En paralelo, el índice de comercios
          orientados a turismo creció 39 puntos, reflejando más locales de restauración y retail experiencial en los ejes
          centrales.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={chartCard}
      >
        <h3 className="mb-4 text-xl font-semibold text-charcoal">Correlación turismo-renta</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#D9DCD6" />
            <XAxis
              dataKey="visitors"
              name="Turistas"
              tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)} M`}
            />
            <YAxis dataKey="price" name="Renta" tickFormatter={(value) => `€${value}`} />
            <ZAxis dataKey="commerceIndex" range={[80, 180]} name="Índice comercio" />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              formatter={(value, name) => {
                if (name === 'price') return [`€${value}`, 'Renta mensual'];
                if (name === 'visitors') return [`${(value / 1_000_000).toFixed(2)} M`, 'Turistas'];
                return [`Índice ${value}`, 'Comercio orientado a turismo'];
              }}
              labelFormatter={(value) => `Año ${value}`}
              contentStyle={{ borderRadius: 16, borderColor: '#E8E8E4' }}
            />
            <Scatter data={correlationMetrics} fill="#8A9A5B" />
          </ScatterChart>
        </ResponsiveContainer>
        <p className="mt-4 text-sm text-charcoal/80">
          Cada burbuja representa un año. Los puntos más grandes (mayor intensidad comercial) se agrupan en la esquina superior
          derecha, evidenciando que los distritos con más gasto turístico presentan rentas más elevadas.
        </p>
      </motion.div>
    </div>
  </section>
);

export default DataAnalysis;
