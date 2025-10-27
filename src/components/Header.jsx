const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Búsqueda', path: '/busqueda' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Política de Datos', path: '/politica' }
];

const Header = ({ currentRoute, onNavigate }) => (
  <header className="sticky top-0 z-40 border-b border-cloud/60 bg-white/90 backdrop-blur">
    <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4 md:flex-nowrap md:px-12">
      <button
        type="button"
        onClick={() => {
          onNavigate('/');
        }}
        className="text-lg font-semibold text-charcoal transition hover:text-olive focus:outline-none focus-visible:ring-2 focus-visible:ring-olive/60"
      >
        Cristhyan y Alonso Data
      </button>
      <select
        className="w-full rounded-full border border-cloud/70 bg-white px-4 py-2 text-sm font-medium text-charcoal shadow-sm focus:border-olive focus:outline-none focus:ring-olive md:hidden"
        value={currentRoute}
        onChange={(event) => onNavigate(event.target.value)}
        aria-label="Selecciona una sección"
      >
        {navItems.map((item) => (
          <option key={item.path} value={item.path}>
            {item.label}
          </option>
        ))}
      </select>
      <nav className="hidden items-center gap-6 text-sm font-medium text-charcoal md:flex">
        {navItems.map((item) => {
          const isActive = currentRoute === item.path;
          return (
            <button
              key={item.path}
              type="button"
              onClick={() => onNavigate(item.path)}
              className={`rounded-full px-4 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-olive/60 ${
                isActive ? 'bg-olive/15 text-olive shadow-sm' : 'hover:bg-beige/70'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  </header>
);

export default Header;
