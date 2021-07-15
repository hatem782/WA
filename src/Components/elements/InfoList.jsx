import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
   
    container:{
        width:"100%",
        height:"100%", // to delete
        borderLeft:`solid 2px ${theme.palette.primary.main} `
    },

    item:{
        
        padding:" 10px 20px",
        position:"relative",

        "& *":{
            padding:"0px",
            margin:"0px",
        },

        

        "& h4":{
            color:"#ff6230", //theme.palette.secondary.main,
            fontSize:"15px",
            fontWeight:"600",
            margin:"8px 0px",
            position:"relative",

            "&:before": {
                backgroundColor:theme.palette.primary.main,
                content: '""',
                position:"absolute",
                height:"16px",
                width:"16px",
                borderRadius:"50%",
                left:"-30px",
                top:"4px",
            },
        },

        "& h5":{
            color:theme.palette.font.main,
            fontSize:"12px",
            fontWeight:"600",
            margin:"4px 0px",
        },

        "& p":{
            color:theme.palette.font.main,
            fontSize:"12px",
            fontWeight:"400",
            margin:"4px 0px",
        },
        "& .years":{
            backgroundColor:theme.palette.secondary.main,
            color:"#fff",
            position:"absolute",
            right:"30px",
            top:"25px",

            fontSize:"12px",
            fontWeight:"500",
            padding:" 2px 10px",
            borderRadius:"500px",

            boxShadow:`0px 5px 7px #f57f1750`,

        }

    }
}));



const InfoList=(props)=>{
    const {infos}=props;
    const cs = useStyles();
    return(
        <div className={cs.container} >
            
            {
                infos.map((info,key)=>{
                    return <Item info={info} key={key} />
                })
            }
            
            

        </div>
    );
}


export default InfoList;


const Item=(props)=>{
    const cs = useStyles();
    const {title,subTitle,text,years}=props.info;

    return(
        <div className={cs.item} >
            <h4>{title}</h4>
            <h5>{subTitle}</h5>
            <p>{text}</p>

            <div className="years" >{years}</div>
        </div>
    );
}

