import React, { useState,useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
    S_stepper_puces: {
        position:"absolute",
        left:"0",
        right:"0",
        width: "auto",
        margin: "20px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    
        "& div": {
          backgroundColor: theme.palette.background_1.main,
          width: "10px",
          height: "10px",
          margin: "0px 10px",
          outline: `solid 4px #c2c2c2`,
          borderRadius:"50%",
          transition: "all 0.3s",
          "&:hover": {
            cursor: "pointer",
          },
        },
    
        "& .active": {
          backgroundColor: "transparent",
          outline: `solid 4px ${theme.palette.primary.main}`,
        },
      },
}));

const Swipper = (props) => {
    const {elements}=props;
  const [activeStep, setActiveStep] = useState(0);
  const {S_stepper_puces} = useStyles();
  const theme = useTheme();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={6000}
      >
        {
            elements.map((elem,key)=>{
                return (elem)
            })
        }
      </AutoPlaySwipeableViews>

      <div className={S_stepper_puces}>
        {elements.map((item, key) => {
          return (
            <div
              key={key}
              className={key === activeStep ? "active" : ""}
              onClick={() => handleStepChange(key)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Swipper;