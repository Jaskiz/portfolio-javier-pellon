import AmbientLayers from './components/AmbientLayers.jsx';
import BackToTop from './components/BackToTop.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import SobreMi from './components/SobreMi.jsx';
import Trayectoria from './components/Trayectoria.jsx';
import ProyectoDestacado from './components/ProyectoDestacado.jsx';
import OtrosProyectos from './components/OtrosProyectos.jsx';
import Stack from './components/Stack.jsx';
import Freelance from './components/Freelance.jsx';
import Contacto from './components/Contacto.jsx';

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <AmbientLayers />
      <BackToTop />
      <Nav />
      <Hero />
      <SobreMi />
      <Trayectoria />
      <ProyectoDestacado />
      <OtrosProyectos />
      <Stack />
      <Freelance />
      <Contacto />
    </div>
  );
}
