import React from 'react';
import { makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    button:{
        backgroundColor:theme.palette.primary.main,
        color:"#fff",

        outline:"none",
        border:"none",
        padding:"12px 0px",
        margin:"10px 20px 10px 0px",
        width:"140px",
        borderRadius:"500px;",
        boxShadow:`0px 7px 7px #0abead50`,


        fontWeight:"600",
        fontSize:"12px",
        transition:"all 0.2s",

        "&:hover":{
            cursor:"pointer",
            transform:"scale(1.05)",
        },

        "&:active":{
            transform:"scale(0.95)",
            boxShadow:`0px 7px 7px #00000000`,
        }
        
    },
    orange:{
        backgroundColor:theme.palette.secondary.main,
        boxShadow:`0px 7px 7px #f57f1750`,
    },
    fullWidth:{
        width:"100%",
    }

}))

const Button=(props)=> {
    const {children,color="primary",fullWidth=false}=props;
    const cs=useStyles();
    return (
        <button 
        className={cs.button + " " 
        + (color==="primary" ? " ": cs.orange)
        + (fullWidth ? ` ${cs.fullWidth}`:" ") }
        style={
            (color!=="primary"||color!=="secondary") ? 
            {backgroundColor:color,boxShadow:`0px 7px 7px ${color}50`,}
            :null
        }
        >
            {props.children}
        </button>
    )
}

export default Button
