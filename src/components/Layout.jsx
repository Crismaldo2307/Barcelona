import ChatIA from './ChatIA.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

const Layout = ({ children, currentRoute, onNavigate }) => (
  <div className="flex min-h-screen flex-col bg-beige/30">
    <Header currentRoute={currentRoute} onNavigate={onNavigate} />
    <main className="flex-1">{children}</main>
    <Footer />
    <ChatIA />
  </div>
);

export default Layout;
