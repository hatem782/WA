import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from "../Components/Container";

const useStyles = makeStyles((theme) => ({
    nav:{
        backgroundColor:theme.palette.background_2.main,
        width:"100%",
        padding:"10px",
        //boxShadow:`0px -40px 50px 5px ${theme.palette.primary.main}`,
        boxShadow:`0px 0px 50px ${theme.palette.blue_shadow.main}`,
        position:"absolute",
    },

    nav_container:{
        display:"flex",
        justifyContent:"space-between"
    },

    wa:{
        fontWeight:"900",
        fontSize:"55px",
        color:theme.palette.primary.main,
        margin:"0px",
        padding:"0px",
    },

    routes:{
        display:"flex",
        alignItems:"center",
        fontWeight:"400",
        fontSize:"13px",
        color:theme.palette.font.main,

        "& div":{
            margin:"0px 15px",
        },

        "& .active":{
            color:theme.palette.primary.main,
        }

    }


}));


const Home=()=>{

    const cs=useStyles();
    
    return(
        <nav className={cs.nav}  >
        <Container>
            <div className={cs.nav_container} >
                <h1 className={cs.wa} >
                    WA.
                </h1>
                
                <div className={cs.routes} >
                    <div className="active" >Home</div>
                    <div>About us</div>
                    <div>Resume</div>
                    <div>Services</div>
                    <div>Portfolio</div>
                    <div>Pricing</div>
                    <div>Contact</div>                    
                </div>
            </div>
        </Container>
        </nav>
    );
}

export default Home;