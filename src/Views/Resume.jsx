import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Components/Container";
import SectionTitle from "../Components/elements/SectionTitle";

import img1 from "../Assets/images/Icon awesome-chart-bar@1X.png";
import img2 from "../Assets/images/Icon awesome-laptop-code@1X.png";
import img3 from "../Assets/images/Icon awesome-user-graduate@1X.png";
import img4 from "../Assets/images/Icon map-art-gallery@1X.png";
import img5 from "../Assets/images/history icon@1X.png";



import MenuCard from "../Components/cards/MenuCard";

const useStyles = makeStyles((theme) => ({
  resume_wrap: {
    margin:"100px 0px",
    filter: `drop-shadow(0px 0px 50px ${theme.palette.blue_shadow.main} );`,
  },

  resume: {
    padding: "50px 0px",
    //clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)",
    backgroundColor:theme.palette.background_2.main,
  },
}));

const About = () => {
  const cs = useStyles();

  return (
    <div className={cs.resume_wrap}>
      <div className={cs.resume}>
        <Container>
        <SectionTitle title="Resume" text="My formal Bio Details" />

            <Grid container spacing={0}>

                <Grid item xl={4} lg={4} >
                    <MenuCard items={items} />
                </Grid>

                <Grid item xl={8} lg={8} >

                </Grid>



            </Grid>
        
        </Container>
      </div>
    </div>
  );
};

export default About;



const items = [
    {
        title:"Education",
        img:img3,
        active:true,
    },
    {
        title:"Work History",
        img:img2,
        active:false,
    },
    {
        title:"Programming Skill",
        img:img1,
        active:false,
    },
    {
        title:"Designer Skills",
        img:img4,
        active:false,
    },
    {
        title:"SEO Skills",
        img:img5,
        active:false,
    },

]
