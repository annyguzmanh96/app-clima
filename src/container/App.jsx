import {Routes, Route} from 'react-router-dom';
import { Home } from "../pages/Home";
import { Contacto } from '../pages/Contacto';
import {PhotoDelDia} from '../components/PhotoDelDia';
import 'bootstrap/dist/css/bootstrap.min.css';


//entry point
export function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/PhotoDelDia' element={<PhotoDelDia />}/>
      </Routes>
    </div>
   
  );
}

