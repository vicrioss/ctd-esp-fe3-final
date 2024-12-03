
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import { ContextProvider } from "./Components/utils/global.context";
import Detail from './Routes/Detail';
import Layout from './Layout/Layout';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
    <div className="content">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/dentista/:id" element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not Found </h1>} />
      </Route>
      </Routes>
    </div>
  </BrowserRouter>
  </ContextProvider>
  );
}

export default App;
