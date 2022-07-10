import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  
    container: {

    width:"267px",
    height:"267px",
    
    margin:"auto",
    padding:"50px 30px 20px 30px",

    color:"white",
    textAlign:"center",
    position:"relative",

    transition:"all 0.2s",

    "&:hover":{
      transform:"scale(1.05)",
      cursor:"pointer",
    }
  },

  img:{
      display:"block",
      margin:"auto",
      height:"45px",
  },

  h3:{
    fontSize:"16px",
    position:"relative",
    zIndex:"1",

  },

  p:{
    fontSize:"12px",
    fontWeight:"500",
    zIndex:"1",
    position:"relative",
  },

  waves:{
      position:"absolute",
      bottom:"-30px",
      width:"100%",
      left:"0",
      BackgroundColor:"#803afb",
      
  },



}));

const ServiceCard = (props) => {
  const {title,text,img,color1,color2}=props.service;
  const cs = useStyles();


  return (
    <div  className={cs.container} 
    style={{
      backgroundColor:color1, 
      boxShadow: `0px 0px 50px ${color1+"60"}`,}} >
        <img src={img} className={cs.img}  />
        <h3 className={cs.h3} >{title}</h3>
        <p className={cs.p} >{text}</p>
        <SvgService color2={color2} />
    </div>
  );
};

export default ServiceCard;


const SvgService=(props)=>{
  const {color2}=props;
  const cs = useStyles();

  return(
    <svg className={cs.waves}  xmlns="http://www.w3.org/2000/svg" width="369.919" height="223.59" viewBox="0 0 369.919 223.59">
      <path id="Shape" style={{fill:color2}} d="M449,2700.557s15.007-66.794,51.8-54.34,43.02,57.737,121.7,13.585,95.662-58.3,124.531-23.774,71.888-34.53,71.888-34.53v223.59H449Z" transform="translate(-449 -2601.498)"/>
    </svg>
  )

}
