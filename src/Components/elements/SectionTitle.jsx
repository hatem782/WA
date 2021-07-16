import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {ZoomIn} from "../../Animations/Zoom";


const useStyles = makeStyles((theme) => ({
  
    container: {

    margin:" 50px auto",
    width:"360px",


    "& h2": {
      color: theme.palette.primary.main,
      fontWeight: "700",
      fontSize: "35px",
      textAlign:"center",
      margin: "0px",


    },
    "& p": {
      color: theme.palette.font.main,
      fontWeight: "400",
      fontSize: "12px",
      margin: "4px 0px 25px 0px",
      textAlign:"center",
      letterSpacing:"3px",
    },

    "& hr":{
        width:"170px",
        margin:"auto",
        border:`solid 1px ${theme.palette.primary.main}`,
        position:"relative",

        "&:after": {
            content: '""',
            backgroundColor:theme.palette.primary.main,
            position:"absolute",
            display: "block",
            width:"30px",
            height:"7px",
            borderRadius:"500px",
            top:"-3px",
            left:"0px",
            right:"0px",
            margin:"auto"
          },
    }

  },
}));

const SectionTitle = (props) => {
  const {title,text}=props;
  const cs = useStyles();

  return (
    <div className={cs.container}>
        <ZoomIn>
        <h2>{title}</h2>
        <p>{text}</p>
        <hr/>
        </ZoomIn>

    </div>
  );
};

export default SectionTitle;
