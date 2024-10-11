import MainLayout from "../layouts/MainLayout";
import HeroSection from "../section/HeroSection";
import Event from "../section/EventSection";
import Services from "../section/ServiceSection";
import About from "../section/About";
import Blog from "../section/Blog";
import Preview from "../section/Preview";
import PhotoGallery from "../section/PhotoGallery";


const Home = () =>{
    return(
        <MainLayout>
        <HeroSection/>
         <Event/> 
         <Services/>
         <About/>
        <Blog/>
        <Preview/>
        <PhotoGallery/>  
        </MainLayout>
        
    );
};
export default Home;