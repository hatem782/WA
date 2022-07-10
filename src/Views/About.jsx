import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Components/Container";
import Button from "../Components/buttons/Button";
import SectionTitle from "../Components/elements/SectionTitle";

import img_person2 from "../Assets/images/corporate-man-holding-ipad-medium-shot_23-2148336825@1X.png";

import {ZoomIn} from "../Animations/Zoom";

const useStyles = makeStyles((theme) => ({
  about: {
    padding: "0px 0px 50px 0px",
  },

  about_card: {
    boxShadow: `0px 0px 50px ${theme.palette.blue_shadow.main}`,
  },

  image: {
    backgroundImage: `url(${img_person2})`,
    backgroundSize: "cover",
    backgroundPosition: "50% center",
    height: "480px",
    width: "100%",
    transform: "scaleX(-1)",
  },

  description: {

    padding:"40px 25px",
    color: theme.palette.font.main,

    "& h4": {
      fontWeight: "500",
      fontSIze: "25px",
      margin: "6px 0px",
    },
    "& p": {
      fontWeight: "300",
      fontSize: "12px",
      margin: "6px 0px 25px 0px",
    },
    "& h5":{
        fontWeight: "600",
        margin: "50px 0px 0px 0px",
        color: theme.palette.primary.main,
    },

    "& .buttons":{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    },

    "& ul":{
      fontWeight: "300",
      fontSize: "12px",
      padding:"0px",
      listStyle:"none",
      listStylePosition: "outside",
    },

    "& li":{
        margin: "6px 0px",

        "&:before": {
          backgroundColor:theme.palette.secondary.main,
          content: '""',
          display:"inline-block",
          height:"10px",
          width:"10px",
          margin:"0px 15px",
          borderRadius:"50%",
      }
    
  },}

}));

const About = () => {
  const cs = useStyles();

  return (
    <div className={cs.about} id="About" >
      <ZoomIn duration={1000} >
      <Container>
        <SectionTitle title="About Us" text="Why Choose Me?" />

        <div className={cs.about_card}>
          <Grid container spacing={0}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className={cs.image} />
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
              <div className={cs.description}>
                <h4>Why Choose me ?</h4>
                <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
                </p>

                <h5>Here is Few Features:</h5>

                <ul>
                    <li>User Interface Design</li>
                    <li>User Experience Design</li>
                    <li>Visual Commination Design</li>
                    <li>Interaction Design</li>
                    <li>Supper Support</li>
                </ul>

                <div className="buttons" >
                <Button color="primary">Hire Me</Button>
                <Button color="secondary">Get Resume</Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      </ZoomIn>
    </div>
  );
};

export default About;
