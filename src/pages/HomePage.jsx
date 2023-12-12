import { Box } from "@mui/material";
import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const HomePage = () => {
    return (
        <Box className="text-neutral-300">            
                <div id="home" className="mb-20">
                <Banner/>                    
                </div>
                <div id="about" className="my-20  mx-20">
                    <About/>
                </div>
                <div id="projects" className="my-20 mx-20">
                  <Projects/>
                </div>
                <div id="contact" className="my-20 mx-20">
                   <Contact/>
                </div>           
        </Box>
    );
};

export default HomePage;