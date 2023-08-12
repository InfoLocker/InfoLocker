import BackgroundWrapper from "./components/backgroundWrapper/BackgroundWrapper";
import Login from "./components/logincomponent/Login";
import {BrowserRouter , Routes  , Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import HomePage from "./components/homepage/HomePage";
import DataForm from "./components/dataForm/DataForm";
import ProtectedRoutes from './components/typeOfRoute/ProtectedRoutes';
import AboutUs from "./components/AboutUs";
import HowToUse from "./components/HowToUse";
import TnC from "./TnC"
import PrivacyPolicy from "./PrivacyPolicy";
import PublicRoutes from "./components/typeOfRoute/PublicRoutes";
import ContactUs from "./components/contactUs/ContactUs";


function App() {


  return (


    <BrowserRouter> 
    <BackgroundWrapper variantt="blue">
      
        <Routes>
        <Route  path="/" element={<PublicRoutes><LandingPage/></PublicRoutes>} />
        <Route  path="/login" element={<PublicRoutes><Login/></PublicRoutes>} />
        <Route  path="/aboutus" element={<PublicRoutes><AboutUs/></PublicRoutes>} />
        <Route  path="/howtouse" element={<PublicRoutes><HowToUse/></PublicRoutes>} />
        <Route  path="/tnc" element={<PublicRoutes><TnC/></PublicRoutes>} />
        <Route  path="/privacy" element={<PublicRoutes><PrivacyPolicy/></PublicRoutes>} />
        <Route  path="/contactus" element={<PublicRoutes><ContactUs/></PublicRoutes>} />
        </Routes>
        <Routes>
             <Route exact path="/profile" element={<ProtectedRoutes><HomePage/></ProtectedRoutes>} />
        <Route exact path="/dataForm" element={<ProtectedRoutes><DataForm /></ProtectedRoutes>} />
        <Route  path="/profile/aboutus" element={<ProtectedRoutes><AboutUs/></ProtectedRoutes>} />
        <Route  path="/profile/howtouse" element={<ProtectedRoutes><HowToUse/></ProtectedRoutes>} />
        <Route  path="/profile/tnc" element={<ProtectedRoutes><TnC/></ProtectedRoutes>} />
        <Route  path="/profile/privacy" element={<ProtectedRoutes><PrivacyPolicy/></ProtectedRoutes>} />
        <Route  path="/profile/contactus" element={<ProtectedRoutes><ContactUs/></ProtectedRoutes>} />
        </Routes>     
      
      </BackgroundWrapper>
    
    </BrowserRouter>
   
  );
}

export default App;
