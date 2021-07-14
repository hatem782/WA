import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from "../Components/Container";
import Button from "../Components/buttons/Button";

import img_person1 from "../Assets/images/happy-young-man-pointing-finger-aside_1262-14983@1X.png"
import blueWave from "../Assets/images/blue_wave.png";

const useStyles = makeStyles((theme) => ({

    home:{
        padding:"200px 0px 0px 0px",
    },

    image:{
        backgroundImage:`url(${img_person1})`,
        backgroundSize:"166%",
        backgroundPosition:"32% center",
        height:"400px",
        width:"400px",
        transform:"scaleX(-1)",

        borderRadius:"50%",
        border:`solid 16px ${theme.palette.background_2.main}`,
        boxShadow:`0px 0px 50px ${theme.palette.blue_shadow.main}`,
    },

    description_container:{
        display:"flex",
        alignItems:"center",
    },

    description:{
        "& h3":{
            color:theme.palette.primary.main,
            fontWeight:"700",
            fontSIze:"25px",
            margin:"6px 0px",
        },
        "& h1":{
            color:theme.palette.primary.main,
            fontWeight:"800",
            fontSize:"35px",
            margin:"6px 0px",
        },
        "& p":{
            color:theme.palette.font.main,
            fontWeight:"300",
            fontSize:"10px",
            margin:"6px 0px 25px 0px",
        },
        "& .orange":{
            color:theme.palette.secondary.main,
            margin:"6px 0px",

        }
    },

    wave:{
        width:"100%",
        display:"block",
    }
}));


const Home=()=>{

    const cs=useStyles();
    
    return(
        <div className={cs.home} >
        <Container>

            <Grid container spacing={0} >
                <Grid item xl={6} lg={6} md={6} className={cs.description_container} >
                    <div className={cs.description} >
                        <h3>Hello, IM <span className="orange" > White Alexa </span></h3>
                        <h1>Creative Designer</h1>
                        <p>Freelancer Web/ Mobile UI/UX Designer with Motion Graphics</p>
                        <Button color="primary" >Hire Me</Button>
                        <Button color="secondary" >Get Resume</Button>

                    </div>
                </Grid>

                <Grid item xl={6} lg={6} md={6} >
                    <div className={cs.image} />
                </Grid>
            </Grid>

        </Container>
        <img className={cs.wave} src={blueWave} />
        </div>
    );
}

export default Home;