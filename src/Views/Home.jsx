import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Components/Container";
import Button from "../Components/buttons/Button";

import img_person1 from "../Assets/images/happy-young-man-pointing-finger-aside_1262-14983@1X.png";
import blueWave from "../Assets/images/blue_wave.png";

const useStyles = makeStyles((theme) => ({
  home: {
    padding: "200px 0px 0px 0px",
  },

  image: {
    backgroundImage: `url(${img_person1})`,
    backgroundSize: "166%",
    backgroundPosition: "32% center",
    height: "400px",
    width: "400px",
    transform: "scaleX(-1)",

    borderRadius: "50%",
    border: `solid 16px ${theme.palette.background_2.main}`,
    boxShadow: `0px 0px 50px ${theme.palette.blue_shadow.main}`,
  },

  description_container: {
    display: "flex",
    alignItems: "center",
  },

  description: {
    "& h3": {
      color: theme.palette.primary.main,
      fontWeight: "700",
      margin: "6px 0px",
    },
    "& h1": {
      color: theme.palette.primary.main,
      fontWeight: "800",
      fontSize: "35px",
      margin: "6px 0px",
    },
    "& p": {
      color: theme.palette.font.main,
      fontWeight: "300",
      fontSize: "10px",
      margin: "6px 0px 5px 0px",
    },
    "& .orange": {
      color: theme.palette.secondary.main,
      margin: "6px 0px",
    },
  },

  wave: {
    width: "100%",
    display:"block",
  },
  path:{
    fill: theme.palette.home_shape.main,
  }
}));

const Home = () => {
  const cs = useStyles();

  return (
    <div className={cs.home}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xl={6} lg={6} md={6} className={cs.description_container}>
            <div className={cs.description}>
              <h3>
                Hello, IM <span className="orange"> White Alexa </span>
              </h3>
              <h1>Creative Designer</h1>
              <p>Freelancer Web/ Mobile UI/UX Designer with Motion Graphics</p>
              <Button color="primary">Hire Me</Button>
              <Button color="secondary">Get Resume</Button>
            </div>
          </Grid>

          <Grid item xl={6} lg={6} md={6}>
            <div className={cs.image} />
          </Grid>
        </Grid>
      </Container>
      {/*<img className={cs.wave} src={blueWave} />*/}
      <svg
        className={cs.wave}
        xmlns="http://www.w3.org/2000/svg"
        width="1919.538"
        height="255.601"
        viewBox="0 0 1919.538 255.601"
      >
        <path
          id="Shape"
          className={cs.path}
          d="M74.783,953.3c67.025,52.218,166.714,98.992,298,78.2,263.637-41.742,252.483-137.226,544.85-30.757s358.107,28.729,547.046-37.349c174.958-61.187,332.962,92.673,528.932,28.5,1.364-1.754-.223,212.482-.179,212.411l-1918.8-3.236S75.587,954.435,74.783,953.3Z"
          transform="translate(-74.632 -948.704)"
        />
      </svg>
    </div>
  );
};

export default Home;
