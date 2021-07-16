import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Components/Container";
import SectionTitle from "../Components/elements/SectionTitle";

import resume_data from "../Data/resume_data";

import MenuCard from "../Components/cards/MenuCard";
import InfoList from "../Components/elements/InfoList";

import {FadeLeft} from "../Animations/Fade";
import {ZoomIn} from "../Animations/Zoom";

const useStyles = makeStyles((theme) => ({
  resume_wrap: {
    margin: "100px 0px 50px 0px",
    filter: `drop-shadow(0px 0px 50px ${theme.palette.blue_shadow.main} );`,
  },

  resume: {
    padding: "100px 0px 150px 0px",
    clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)",
    backgroundColor: theme.palette.background_2.main,

    [theme.breakpoints.down("xs")]: {
      clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
    },

  },
  centerY: {
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
  },
}));

const Resume = () => {
  const cs = useStyles();

  const [items, setItems] = useState(resume_data);
  const [Infos, setInfos] = useState(items[0].details)

  useEffect(()=>{
    
    setInfos(
    items.filter((item)=>{
      return (item.active);
    })[0].details
    );

  },[items])

  const activeItem=(id)=>{
    setItems(
      items.map((item)=>{
        if(item.id!=id){
          return {...item,active:false}
        }
        else{
          return {...item,active:true}
        }
      })
    )
  }

  return (
    <div className={cs.resume_wrap} id="Resume" >
      <div className={cs.resume}>
        <Container>
          <SectionTitle title="Resume" text="My formal Bio Details" />

          <Grid container spacing={10}>
            <Grid item xl={4} lg={4} md={4} ms={12} xs={12}  className={cs.centerY}>
              <ZoomIn>
              <MenuCard items={items} activeItem={activeItem} />
              </ZoomIn>
            </Grid>

            <Grid item xl={8} lg={8} md={8} ms={12} xs={12} >
              <FadeLeft>
              <InfoList infos={Infos} />
              </FadeLeft>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Resume;


