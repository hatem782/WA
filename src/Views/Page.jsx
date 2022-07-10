import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Navbar from "../Layouts/NavBar";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Resume from "./Resume.jsx";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "../Layouts/Footer";

const useStyles = makeStyles((theme) => ({
    page:{
        backgroundColor:theme.palette.background_1.main,
    }
}));

const Page = (props) => {
    const cs = useStyles();
  return (
      <div className={cs.page} >
        <Navbar theme={props.theme} setTheme={props.setTheme} />
        <Home />
        <About/>
        <Services/>
        <Resume />
        <Portfolio />
        <Pricing />
        <Contact />
        <Footer />
      </div>
  );
};

export default Page;
