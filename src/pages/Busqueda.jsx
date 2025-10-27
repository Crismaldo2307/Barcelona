const fuentes = [
  'Ajuntament de Barcelona - Departament d’Estudis i Estadística',
  'Institut Nacional d’Estadística (INE) - Estadística de precios de alquiler',
  'Ministerio de Industria, Comercio y Turismo - Dataestur',
  'AirDNA & Inside Airbnb - Indicadores de oferta turística',
  'Kaggle Open Data - Barcelona Housing Market'
];

const Busqueda = () => (
  <section className="container mx-auto px-6 py-20 md:px-12">
    <div className="mx-auto max-w-5xl space-y-14">
      <div className="space-y-4 text-center">
        <h1 className="section-title">Visualizaciones Looker Studio</h1>
        <p className="section-subtitle mx-auto">
          Explora los dashboards interactivos que sustentan el análisis del incremento del precio de la renta en Barcelona.
        </p>
      </div>

      <article className="space-y-4 rounded-3xl bg-white/85 p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-charcoal">Análisis del incremento del precio de la renta en Barcelona en Looker Studio</h2>
        <div className="embed-responsive">
          <iframe
            width="100%"
            height="600"
            src="https://lookerstudio.google.com/embed/reporting/6f8344ee-b498-4dc4-97ea-25c805d8753f/page/CH8cF"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            title="Dashboard incremento renta"
          ></iframe>
        </div>
        <p className="text-sm text-charcoal/80">
          Este análisis muestra la evolución del precio de la renta en Barcelona y su correlación con factores económicos, comerciales y turísticos.
        </p>
      </article>

      <article className="space-y-4 rounded-3xl bg-white/85 p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-charcoal">Proceso requerido en BigQuery</h2>
        <p className="text-sm text-charcoal/80">
          A continuación se visualiza el flujo de preparación y limpieza de datos desarrollado en BigQuery, representado mediante imágenes dentro del informe.
        </p>
        <div className="embed-responsive">
          <iframe
            width="100%"
            height="600"
            src="https://lookerstudio.google.com/embed/reporting/d6df50f4-0553-46e7-98c7-12165385683e/page/p_zk1z2lckxd"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            title="Proceso BigQuery"
          ></iframe>
        </div>
      </article>

      <aside className="rounded-3xl bg-beige/60 p-6 text-sm text-charcoal/80 shadow-inner">
        <h3 className="text-lg font-semibold text-charcoal">Fuentes destacadas</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {fuentes.map((fuente) => (
            <li key={fuente}>{fuente}</li>
          ))}
        </ul>
      </aside>
    </div>
  </section>
);

export default Busqueda;
