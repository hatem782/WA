import React from 'react';
import { makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    button:{
        backgroundColor:theme.palette.primary.main,
        color:"#fff",

        outline:"none",
        border:"none",
        padding:"12px 0px",
        marginRight:"20px",
        marginTop:"20px",
        width:"140px",
        borderRadius:"500px;",
        boxShadow:`0px 7px 7px #0abead50`,


        fontWeight:"600",
        fontSize:"12px",
    },
    orange:{
        backgroundColor:theme.palette.secondary.main,
        boxShadow:`0px 7px 7px #f57f1750`,
    }

}))

const Button=(props)=> {
    const {children,color}=props;
    const cs=useStyles();
    return (
        <button className={cs.button + " " + (color==="primary" ? " ": cs.orange)  }  >
            {props.children}
        </button>
    )
}

export default Button
