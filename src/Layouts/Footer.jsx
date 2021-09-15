import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Container from "../Components/Container";


import {AiFillBehanceCircle,AiFillDribbbleCircle} from 'react-icons/ai';
import {FaFacebook,FaSkype,FaPinterest} from 'react-icons/fa';


const useStyles = makeStyles((theme) => ({
    footer:{
        backgroundColor:theme.palette.background_1.main,
        padding:"30px 0px",


        "& .container":{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            flexWrap:"wrap",
            
            [theme.breakpoints.down("sm")]: {
                display:"block",
                textAlign:"center",
            },


            "& p":{
                margin:"0px",
                padding:"0px",
                color:theme.palette.font.main,
                fontSize:"13px",
                fontWeight:"600",
                letterSpacing:"3px",

            },

            "& .icons":{

                display:"flex",
                alignItems:"center",
                justifyContent:"center",

                "& .icon1,.icon2":{
                    color:theme.palette.font.main,
                    margin:"0px 5px",

                    "&:hover":{
                        cursor:"pointer",
                        color:theme.palette.primary.main,
                    }
                },


                "& .icon1":{
                    fontSize:"35px",
                },

                "& .icon2":{
                    fontSize:"37px",
                }
            }
        }
    }
}));

const Footer = () => {
    const cs = useStyles();
  return (
      <div className={cs.footer} >
          <Container >
              <div className="container" >
              <p> ©This site is created by Hatem Ben Echikh. </p>
              <div className="icons" >
                  <FaFacebook className="icon1" />
                  <AiFillBehanceCircle className="icon2" />
                  <AiFillDribbbleCircle className="icon2" />
                  <FaPinterest className="icon1" />
                  <FaSkype className="icon1" />
              </div>
              </div>
          </Container>
      </div>
  );
};

export default Footer;
