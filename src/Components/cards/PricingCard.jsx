import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../buttons/Button";

const useStyles = makeStyles((theme) => ({
 
    card:{
        width:"100%",
        boxShadow:`0px 0px 50px ${theme.palette.blue_shadow.main}`,
        backgroundColor:theme.palette.background_1.main,

        transition:"all 0.2s",

        /*"&:hover":{
          transform:"scale(1.05)",
          cursor:"pointer",
        },*/

        "& .head":{
            padding:"20px 0px",
            textAlign:"center",

            "& h2":{
                color:"#fff",
                fontWeight:"600",
                margin: "0px",
                padding: "0px",

            },

            "& h3":{
                color:"#fff",
                fontWeight:"700",
                //fontSize
                margin: "0px",
                padding: "0px",
            },

            "& p":{
                color:"#fff",
                fontWeight:"500",
                margin: "0px",
                padding: "5px 0px",
                fontSize:"12px",
            },

        },


        "& ul":{
            margin:"0px",
            padding:"10px 0px 0px 60px",
            listStyle: "none",

            "& li":{

                fontSize:"11px",
                fontWeight:"400",
                color:theme.palette.font.main,
                margin:"17px 0px",

                "&:before":{
                    content: '"✔️"',
                    marginRight:"10px",
                    fontSize:"10px",
                   
                },
            },

            
        },

        "& .center":{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            padding:"0px 0px 20px 0px",
        }
    }

}));

const PricingCard = (props) => {
  const {title,price,description,color,content}=props.item;
  const cs = useStyles();


  return (
    <div className={cs.card} >
        <div className="head" style={{backgroundColor:color}} >
            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
        </div>
        <ul>
            {
                content.map((item,key)=>{
                    return <li key={key} > {item} </li>
                })
            }
        </ul>

        <div className="center" ><Button color={color} > Choose Plan </Button></div>
        

    </div>
  );
};

export default PricingCard;




