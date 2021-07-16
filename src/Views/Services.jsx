import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Container from "../Components/Container";
import SectionTitle from "../Components/elements/SectionTitle";

import ServiceCard from "../Components/cards/ServiceCard";

import {FadeUp} from "../Animations/Fade";
import {ZoomIn} from "../Animations/Zoom";

import img1 from "../Assets/images/icon@1X.png";
import img2 from "../Assets/images/icon@1X (1).png";
import img3 from "../Assets/images/icon@1X (2).png";
import img4 from "../Assets/images/icon@1X (3).png";
import img5 from "../Assets/images/icon@1X (4).png";
import img6 from "../Assets/images/icon@1X (5).png";

const useStyles = makeStyles((theme) => ({}));

const Services = () => {
  const cs = useStyles();

  return (
    <div id="Services" >
      <Container>
       <SectionTitle title="Services" text="What We Provide For You ?" />

        <Grid container spacing={3}>
          {services.map((service, key) => {
            return (
              <Grid key={key} item xl={4} lg={4} md={6} sm={12} xs={12}>
                <FadeUp>
                <ServiceCard service={service} />
                </FadeUp>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;

const services = [
  {
    title: "Web Design",
    text: `Lipsum as it is sometimes known
        is dummy text used in laying out print,
        graphic or web designs.`,
    img: img3,
    color1: "#8540ff",
    color2: "#803afb",
  },
  {
    title: "Interface Design",
    text: `Lipsum as it is sometimes known
        is dummy text used in laying out print,
        graphic or web designs.`,
    img: img1,
    color1: "#ffc50c",
    color2: "#ffbb01",
  },
  {
    title: "Web Development",
    text: `Lipsum as it is sometimes known
        is dummy text used in laying out print,
        graphic or web designs.`,
    img: img2,
    color1: "#ec407a",
    color2: "#f5276c",
  },
  {
    title: "UX Design",
    text: `Lipsum as it is sometimes known
        is dummy text used in laying out print,
        graphic or web designs.`,
    img: img6,
    color1: "#ff6331",
    color2: "#ff5823",
  },
  {
    title: "Motion Graphic",
    text: `Lipsum as it is sometimes known
        is dummy text used in laying out print,
        graphic or web designs.`,
    img: img5,
    color1: "#13b6ff",
    color2: "#03acf8",
  },
  {
    title: "SEO Optimize",
    text: `Lipsum as it is sometimes known
        is dummy text used in laying out print,
        graphic or web designs.`,
    img: img4,
    color1: "#49af46",
    color2: "#49b846",
  },
];
