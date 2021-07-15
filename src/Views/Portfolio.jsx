import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Components/Container";
import SectionTitle from "../Components/elements/SectionTitle";

import Swipper from "../Components/elements/Swipper";

import {buttons_titles,all_sites} from "../Data/portfolio_data";
import {TableToNb} from "../Functions/functions";

const useStyles = makeStyles((theme) => ({
  portfolio: {
    padding: "0px 0px 50px 0px",
  },

  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",

    color: theme.palette.font.main,
    fontSize: "12px",
    fontWeight: "400",
    
    "& div": {
      padding: "7px 20px",
      cursor:"pointer",
    },

    "& .active": {
      backgroundColor: theme.palette.primary.main,
      boxShadow:`0px 7px 7px #0abead50`,
      borderRadius: "500px",
      color: "white",
    },
  },

  img_container:{
      padding:"20px",
  },

  img:{
      width:"100%",
      height:"300px",
      backgroundSize:"cover",
      backgroundPosition:"center center",
  }
}));

const Portfolio = () => {
  const cs = useStyles();
  const [buttons, setButtons] = useState(buttons_titles);
  const [sites, setSites] = useState([]);
  const [elements,SetElements]=useState([]);
  const [type, setType] = useState("All Work");

  useEffect(() => {

    let filteredSites = all_sites.filter((item)=>{
        return ((item.types.indexOf(type)!==-1 )|| type==="All Work");
    });

    setSites(TableToNb(filteredSites,3))
    console.log(sites);
  },[type]);

  useEffect(()=>{
    SetElements(
        sites.map((sites_group,key)=>{
            return <Sites key={key} sites_group={sites_group}  />
        })
    );
  },[sites]);

  return (
    <div className={cs.portfolio}>
      <Container>
        <SectionTitle title="Portfolio" text="Why Choose Me?" />

        <div className={cs.buttons}>
          {buttons.map((button, key) => {
            return (
              <ButtonP
                select={() => {
                  setType(button);
                }}
                key={key}
                title={button}
                current={type}
              />
            );
          })}
        </div>

          <Swipper elements={elements} />

      </Container>
    </div>
  );
};

const ButtonP = (props) => {
  const cs = useStyles();
  const { title, current, select } = props;

  return (
    <div
      className={cs.button + (current === title ? " active" : "")}
      onClick={select}
    >
      {title}
    </div>
  );
};


const Sites=(props)=>{
    const {sites_group}=props;
    const cs = useStyles();
    return(
        <Grid container spacing={0} >
            {
                sites_group.map((item,key)=>{
                    return(
                    <Grid item xl={4} lg={4} >
                        <SiteImg img={item.img}  /> 
                    </Grid>
                    )
                })
            }
          </Grid>
    )
}

const SiteImg=(props)=>{
    const {img}=props;
    const cs = useStyles();

    return (
        <div className={cs.img_container} >

        <div className={cs.img} style={{backgroundImage:`url(${img})`}} />
        </div>

    );
}

export default Portfolio;


/*const elements=[
    <h1>hello</h1>,
    <h1>how</h1>,
    <h1>are</h1>,
    <h1>you</h1>,
    <h1>?</h1>,
]*/