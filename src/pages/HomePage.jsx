import { Box } from "@mui/material";
import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <Box className="text-neutral-300">            
                <div id="home" className="mb-10 lg:mb-20">
                <Banner/>                    
                </div>
                <div id="about" className="mb-10 lg:mb-20">
                    <About/>
                </div>
                <div id="projects" className="mb-10 lg:mb-20">
                  <Projects/>
                </div>
                <div id="contact" className="mb-10 lg:mb-20">
                   <Contact/>
                </div> 
                <Footer/>          
        </Box>
    );
};

export default HomePage;