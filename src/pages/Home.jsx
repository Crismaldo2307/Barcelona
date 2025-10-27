import DataAnalysis from '../components/DataAnalysis.jsx';
import FormularioContacto from '../components/FormularioContacto.jsx';
import Hero from '../components/Hero.jsx';
import LookerMap from '../components/LookerMap.jsx';
import ProjectSummary from '../components/ProjectSummary.jsx';

const Home = ({ onNavigate }) => (
  <>
    <Hero onNavigate={onNavigate} />
    <ProjectSummary />
    <DataAnalysis />
    <LookerMap />
    <FormularioContacto />
  </>
);

export default Home;
