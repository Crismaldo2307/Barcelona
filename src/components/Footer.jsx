const Footer = () => (
  <footer className="border-t border-slate-200 bg-white/90">
    <div className="container mx-auto flex flex-col gap-6 px-6 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-12">
      <p>© {new Date().getFullYear()} Renta y Turismo BCN. Diseño mediterráneo.</p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/tu-usuario/renta-turismo-bcn" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="#privacidad" className="underline">
          Política de privacidad
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
