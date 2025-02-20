import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import AuthPage from './components/pages/signin';
import CottonBhavan from './components/pages/Bhavans';
import  F2 from "./components/pages/appli"
import AboutUs from "./components/pages/AboutUs"
import Footer from "./components/pages/chat"
import BusInfo from './components/pages/busInfo';
import Header from './components/pages/NewCompo1';
import Bushome from './components/pages/bushome';
import Fullpage from './components/pages/fullpage';
// import Application2 from './components/pages/RouteApplication';
import AppHeader from './components/pages/app2_header';
import App2Map from './components/pages/app2_map';
import App2Attractions from './components/pages/app2_attractions';
import Carder from './components/pages/Card';
import Graph from './components/pages/Graph';
import Apple from './components/pages/BusGraph';
import DriversForm from './components/pages/DriversForm';

function App() {
  return (
    <>
    {/* <Fullpage/> */}
    {/* <Apple/> */}
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AuthPage />} /> 
          <Route path="/home" element={<Header />} />
          <Route path="/Application" element={<Bushome/>}/>
          <Route path="/App2" element={<AppHeader/>}/>
          <Route path='/busdash' element={<BusInfo/>}/>
          <Route path='/Map' element={<App2Map/>}/>
          <Route path='/attract' element={<App2Attractions/>}/>
          <Route path='/card' element={<Carder/>}/>
          <Route path='/incard' element={<Fullpage/>}/>
          <Route path='/graph' element={<Apple/>}/>
          <Route path='/admin' element={<DriversForm/>}/>
        </Routes>
      </div>
    </Router>
    {/* <DriversForm/> */}
    </>
  );
}

export default App;
