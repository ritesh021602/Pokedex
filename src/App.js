
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { Downbar } from './Downbar';
import Description from './Routes/Description';
import { EachGen } from './Routes/EachGen';
import { Genc } from './Routes/complete/Genc';
import { Typec } from './Routes/complete/Typec';
import { Regionc } from './Routes/complete/Regionc';

function App() {
 
  return (
   <>
   <Navbar/>
  
   <Downbar/>
   
   
  <Routes>
    <Route exact path="/" element={<EachGen></EachGen>}/>
    <Route path="/description/:name" element={<Description></Description>}/>
    <Route path="/completegen/:gen" element={<Genc/>}/>
    <Route path="/completetype/:type" element={<Typec/>}/>
    <Route path="/completeregion/:region" element={<Regionc/>}/>
  </Routes>
   </>
  );
}

export default App;
