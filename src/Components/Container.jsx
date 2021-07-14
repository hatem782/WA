import React from "react";
import { makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

    container:{
        width:"850px",
        margin:"auto",
    }

}));


const Container=(props)=>{

    const classes=useStyles();
    
    return(
        <div className={classes.container} > {props.children} </div>
    );
}

export default Container;