import { BrowserRouter } from "react-router-dom";

import { PlanetCanvas, Navbar, StarsCanvas, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <div className='relative z-0'>
        <PlanetCanvas />
          <StarsCanvas />
          <Works/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;



