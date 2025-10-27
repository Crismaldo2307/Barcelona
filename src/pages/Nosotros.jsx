const milestones = [
  {
    title: '2018 - Primeros modelos urbanos',
    description:
      'Cristhyan y Alonso se conocen en un máster de analítica urbana en Barcelona. Desarrollan un modelo predictivo que identifica zonas con riesgo de turistificación.'
  },
  {
    title: '2020 - Plataforma de datos territoriales',
    description:
      'Lanzamos dashboards abiertos para ayuntamientos mediterráneos, combinando datos de movilidad, vivienda y consumo.'
  },
  {
    title: '2023 - Laboratorio para inversores responsables',
    description:
      'Creamos un programa para fondos y promotoras que buscan invertir con criterios de sostenibilidad social y urbana.'
  }
];

const services = [
  'Modelización de precios de alquiler y escenarios de regulación',
  'Cuadros de mando con fuentes oficiales y privadas (Looker Studio, BigQuery)',
  'Análisis de impacto turístico-comercial y planes de mitigación',
  'Estudios de localización para inversión residencial responsable'
];

const Nosotros = ({ onNavigate }) => (
  <section className="container mx-auto px-6 py-20 md:px-12">
    <div className="mx-auto max-w-4xl space-y-10 rounded-3xl bg-white/85 p-10 shadow-soft">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-charcoal md:text-4xl">Cristian y Alonso Data</h1>
        <h2 className="text-lg font-semibold text-olive">Propietarios: Cristhyan Maldonado y Alonso Durand</h2>
        <p className="text-charcoal/80">
          Somos un estudio de analítica territorial enfocado en comprender cómo la economía urbana transforma el acceso a la
          vivienda. Operamos entre Barcelona, Madrid y Lima, apoyando a ciudades y empresas en decisiones basadas en datos.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-charcoal">Misión</h3>
        <p className="text-charcoal/80">
          Democratizar el acceso a información urbana rigurosa para equilibrar la atracción turística con la protección del
          residente. Nos enfocamos en construir narrativas visuales que guíen políticas y estrategias sostenibles.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-charcoal">Visión</h3>
        <p className="text-charcoal/80">
          Convertirnos en el aliado estratégico de inversores, administraciones y organizaciones ciudadanas que buscan ciudades
          más equitativas, resilientes y transparentes.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-charcoal">Recorrido</h3>
        <ul className="space-y-3">
          {milestones.map((milestone) => (
            <li key={milestone.title} className="rounded-2xl bg-beige/60 p-4 text-sm text-charcoal/90">
              <strong className="block text-olive">{milestone.title}</strong>
              {milestone.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-charcoal">Servicios</h3>
        <ul className="grid gap-3 md:grid-cols-2">
          {services.map((service) => (
            <li key={service} className="rounded-2xl border border-cloud/70 bg-white/70 p-4 text-sm text-charcoal/90">
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3 rounded-3xl bg-beige/70 p-6 text-center">
        <p className="text-sm text-charcoal/80">
          Nuestro análisis permite anticipar zonas de oportunidad y riesgo para futuros inversores, alineando rentabilidad con
          impacto urbano positivo.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('/', { anchor: 'contacto' })}
          className="inline-flex items-center justify-center rounded-full bg-olive px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sage"
        >
          Contactar
        </button>
      </div>
    </div>
  </section>
);

export default Nosotros;
