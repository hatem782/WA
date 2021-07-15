import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Navbar from "../Layouts/NavBar";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Resume from "./Resume.jsx";

const useStyles = makeStyles((theme) => ({
    page:{
        backgroundColor:theme.palette.background_1.main,
    }
}));

const Page = () => {
    const cs = useStyles();
  return (
      <div className={cs.page} >
        <Navbar />
        <Home />
        <About/>
        <Services/>
        <Resume />
        
      </div>
  );
};

export default Page;
