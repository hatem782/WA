import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Components/Container";
import Button from "../Components/buttons/Button";
import SectionTitle from "../Components/elements/SectionTitle";
import Map from "../Layouts/Map";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  contact: {
    padding: "0px",

    "& .wrapper":{
      position:"relative",
    },
  
    "& .wrapper2":{
      display:"flex",
      alignItems:"center",
      justifyContent:"flex-end",
      height:"620px",
    },
  },

  

  inputs: {
    boxShadow: `0px 0px 50px ${theme.palette.blue_shadow.main}`,
    backgroundColor:theme.palette.background_2.main,
    width: "400px",
    padding: "30px",
    position:"relative",
    zIndex:"1",


    "& h2": {
      color: theme.palette.primary.main,
      padding: "0px",
      margin: "0px 0px 20px 0px",
      fontWeight: "700",
    },

    "& .input":{
      margin:"10px 0px",
      //boxShadow: `0px 0px 25px #0abead30`,
      backgroundColor:theme.palette.background_1.main,
      "& *":{
        color:theme.palette.font.main
      }
    }
  },
}));

const Contact = () => {
  const cs = useStyles();

  return (
    <div className={cs.contact} id="Contact" >
        <SectionTitle title="Contact Us" text="Let's Keep In Touch" />
      
      <div className="wrapper" >
        <Map/>
      <Container>
        <div className="wrapper2" >
        <div className={cs.inputs}>
          <h2>Get In Touch</h2>
          <TextField
            className="input"
            size="small"
            label="Your Name"
            variant="outlined"
            fullWidth
          />

          <TextField
            className="input"
            size="small"
            label="Your Email Address"
            variant="outlined"
            fullWidth
          />

          <TextField
            className="input"
            size="small"
            label="Subject"
            variant="outlined"
            fullWidth
          />

          <TextField
            className="input"
            size="small"
            label="Estimated Budget"
            variant="outlined"
            fullWidth
          />

          <TextField
            className="input"
            size="small"
            label="Enter your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />

          
          <Button fullWidth={true} > Submit </Button>
        </div>
        </div>
      </Container>
      </div>
    </div>
  );
};

export default Contact;
