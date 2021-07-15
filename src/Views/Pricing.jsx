import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Components/Container";
import SectionTitle from "../Components/elements/SectionTitle";

import prices_data from "../Data/prices_data";

import PriceCard from "../Components/cards/PricingCard";

const useStyles = makeStyles((theme) => ({
  pricing_wrap: {
    margin: "100px 0px 50px 0px",
    filter: `drop-shadow(0px 0px 50px ${theme.palette.blue_shadow.main} );`,
  },

  pricing: {
    padding: "100px 0px 200px 0px",
    clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)",
    backgroundColor: theme.palette.background_2.main,
  },
}));

const About = () => {
  const cs = useStyles();

  return (
    <div className={cs.pricing_wrap}>
      <div className={cs.pricing}>
        <Container>
          <SectionTitle title="Pricing" text="Check our Services package" />

          <Grid container spacing={3}>
            {prices_data.map((item, key) => {
              return (
                <Grid item xl={4} lg={4} className={cs.centerY}>
                  <PriceCard key={key} item={item} />
                </Grid>
              );
            })}

           
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default About;
