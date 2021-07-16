import React from "react";
import { makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

    container:{
        width:"850px",
        margin:"auto",

        [theme.breakpoints.down("lg")]: {
            width:"850px",
        },

        [theme.breakpoints.down("md")]: {
            width:"850px",
        },

        [theme.breakpoints.down("sm")]: {
            width:"95%",
        },

        [theme.breakpoints.down("xs")]: {
            width:"360px",
        },
    }

}));


const Container=(props)=>{

    const classes=useStyles();
    
    return(
        <div className={classes.container} > {props.children} </div>
    );
}

export default Container;