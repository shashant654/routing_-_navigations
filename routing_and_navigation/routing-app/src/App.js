import './App.css';
// import { BrowserRouter as Router } from "react-router-dom";
import {Routes,Route } from "react-router-dom"
import About from "./pages/About"
import Login from "./pages/Login"
import Pricing from "./pages/Pricing"
import NotFound from "./pages/NotFound"
import Navigation from './components/Navigation';
import Profile from './pages/Profile';
import Project from './pages/Project';
import FreePricing from './pages/Pricing/FreePricing';
import ProtectedRoute from './pages/ProtectedRoute';
import ForPremiumUsers from './pages/ForPremiumUsers';
// import PremiumPricing from './pages/Pricing/PremiumPricing';
// import Freemium from './pages/Pricing/Freemium';

// import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="*" element ={<NotFound />} />

        <Route path="/about" element ={<About />} />
        <Route path="/login" element ={<Login />} />
        {/* <Route path="/pricing" element ={<Pricing />} /> */}

         <Route path="/user/:userId" element ={<Profile />} />
        <Route path="/user/:userId:projectId" element ={<Project />} />
         
         <Route element={<ProtectedRoute />}>
                <Route path='/prime' element={ForPremiumUsers} />
         </Route>


        {/* <Route path="/user/:userId:projectId/settings" element ={<About />} /> */}

        {/* <Route path="/pricing" element={<Pricing />} > */}
                {/* <Route path="/freePricing" element={<FreePricing />} /> */}

                 {/* <Route path="/premium" element={<PremiumPricing />} />
                <Route path="/freemium" element={<Freemium />} />  */}
        {/* </Route> */}
        
      </Routes>
    </div>
  );
}

export default App;
