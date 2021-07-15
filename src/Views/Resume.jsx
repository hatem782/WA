import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Components/Container";
import SectionTitle from "../Components/elements/SectionTitle";

import resume_data from "../Data/resume_data";

import MenuCard from "../Components/cards/MenuCard";
import InfoList from "../Components/elements/InfoList";

const useStyles = makeStyles((theme) => ({
  resume_wrap: {
    margin: "100px 0px",
    filter: `drop-shadow(0px 0px 50px ${theme.palette.blue_shadow.main} );`,
  },

  resume: {
    padding: "100px 0px 150px 0px",
    clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)",
    backgroundColor: theme.palette.background_2.main,
  },
  centerY: {
    display: "flex",
    alignItems: "center",
  },
}));

const About = () => {
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
    <div className={cs.resume_wrap}>
      <div className={cs.resume}>
        <Container>
          <SectionTitle title="Resume" text="My formal Bio Details" />

          <Grid container spacing={10}>
            <Grid item xl={4} lg={4} className={cs.centerY}>
              <MenuCard items={items} activeItem={activeItem} />
            </Grid>

            <Grid item xl={8} lg={8}>
              <InfoList infos={Infos} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default About;


