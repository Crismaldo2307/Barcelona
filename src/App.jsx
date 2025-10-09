import Hero from './components/Hero.jsx';
import DataAnalysis from './components/DataAnalysis.jsx';
import AboutProject from './components/AboutProject.jsx';
import FormularioContacto from './components/FormularioContacto.jsx';
import Footer from './components/Footer.jsx';
import ChatIA from './components/ChatIA.jsx';

const App = () => (
  <div className="flex min-h-screen flex-col bg-sand/40">
    <header className="sticky top-0 z-40 bg-white/80 shadow-sm backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        <a href="#inicio" className="text-lg font-semibold text-midnight">
          renta-turismo-bcn
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-midnight md:flex">
          <a href="#datos">Datos</a>
          <a href="#sobre">Sobre el proyecto</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>

    <main className="flex-1">
      <Hero />
      <DataAnalysis />
      <AboutProject />
      <FormularioContacto />
    </main>

    <section id="privacidad" className="container mx-auto px-6 pb-24 md:px-12">
      <div className="rounded-3xl bg-white/80 p-6 text-xs text-slate-500 shadow-inner">
        <h3 className="mb-2 text-base font-semibold text-midnight">Política de privacidad</h3>
        <p>
          Este sitio utiliza formularios y analítica básica para mejorar el servicio. Los datos recopilados no se ceden a
          terceros y puedes solicitar su eliminación escribiendo a
          <a href="mailto:privacidad@data-commons.barcelona" className="ml-1 underline">privacidad@data-commons.barcelona</a>.
        </p>
      </div>
    </section>

    <Footer />
    <ChatIA />
  </div>
);

export default App;
