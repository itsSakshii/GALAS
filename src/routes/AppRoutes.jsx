import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "../components/pages/Preloader";
import Home from "../components/pages/Home";
// import EventPage from "../components/pages/EventPage";
// import VendorPage from "../components/pages/VendorPage";
// import ServicePage from "../components/pages/ServicePage";
// import BlogPage from "../components/pages/BlogPage";
// import AboutUs from "../components/pages/AboutUs";


const AppRoutes = () =>{
    return (
        <Router>
            <Routes>
            <Route path = "/" element = {<Preloader/>}/>
             <Route path = "/Home" element = {<Home/>}/> 
                {/* <Route path = "/Event" element = {<EventPage/>}/>
                <Route path = "/Vendor" element = {<VendorPage/>}/>
                <Route path = "/Services" element = {<ServicePage/>}/>
                <Route path = "/Blog" element = {<BlogPage/>}/>
                <Route path = "/About" element = {<AboutUs/>}/> */}
               
            </Routes>
        </Router>
    );
};
export default AppRoutes;