import { useEffect, useMemo, useState } from 'react';
import Layout from './components/Layout.jsx';
import Busqueda from './pages/Busqueda.jsx';
import Home from './pages/Home.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Politica from './pages/Politica.jsx';

const routes = {
  '/': Home,
  '/busqueda': Busqueda,
  '/nosotros': Nosotros,
  '/politica': Politica
};

const normalizeRoute = (hash) => {
  if (!hash || hash === '#') return '/';
  const path = hash.startsWith('#') ? hash.slice(1) : hash;
  if (!path) return '/';
  return path.startsWith('/') ? path : `/${path}`;
};

const App = () => {
  const [currentRoute, setCurrentRoute] = useState(() => normalizeRoute(window.location.hash));
  const [pendingAnchor, setPendingAnchor] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const normalized = normalizeRoute(window.location.hash);
      const [path, anchor] = normalized.split('#');
      setCurrentRoute(path);
      if (anchor) {
        setPendingAnchor(anchor);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (pendingAnchor) {
      const element = document.getElementById(pendingAnchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setPendingAnchor(null);
    }
  }, [pendingAnchor, currentRoute]);

  const navigate = (path, options = {}) => {
    const anchor = options.anchor ? `#${options.anchor}` : '';
    const targetPath = path.startsWith('/') ? path : `/${path}`;
    if (options.anchor) {
      setPendingAnchor(options.anchor);
    }
    window.location.hash = `${targetPath}${anchor}`;
    if (!anchor) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const CurrentPage = useMemo(() => routes[currentRoute] || Home, [currentRoute]);

  return (
    <Layout currentRoute={currentRoute} onNavigate={navigate}>
      <CurrentPage onNavigate={navigate} />
    </Layout>
  );
};

export default App;
