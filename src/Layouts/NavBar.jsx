import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Components/Container";
import { Link } from "react-scroll";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: theme.palette.background_2.main,
    width: "100%",
    padding: "10px",
    //boxShadow:`0px -40px 50px 5px ${theme.palette.primary.main}`,
    boxShadow: `0px 0px 50px ${theme.palette.blue_shadow.main}`,
    position: "fixed",
    zIndex: "10",
  },

  nav_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& .menu_button": {
      height: "60px",
      width: "60px",
      color: theme.palette.primary.main,
      margin: "0px 10px",
    },

    "& .theme":{
      color: theme.palette.primary.main,
      "& *":{
        fontSize:"30px",
      }
    }
  },

  responsive_routes: {
    width: "100%",
  },

  wa: {
    fontWeight: "900",
    fontSize: "55px",
    color: theme.palette.primary.main,
    margin: "0px",
    padding: "0px",
  },

  routes: {
    display: "flex",
    alignItems: "center",
    fontWeight: "400",
    fontSize: "13px",
    color: theme.palette.font.main,

    "& div": {
      margin: "0px 15px",
      "&:hover": {
        cursor: "pointer",
      },
    },

    "& .active": {
      color: theme.palette.primary.main,
    },

    [theme.breakpoints.down("sm")]: {
      display: "block",
      textAlign: "center",
      padding: "0px 0px 10px 0px",
      "& div": {
        margin: "10px 0px",
        fontSize: "16px",
        fontWeight: "500",
        letterSpacing: "5px",
      },
    },
  },
}));

const NavBar = (props) => {
  const cs = useStyles();
  const {theme, setTheme}=props;

  const [routes, setRoutes] = useState(routes_data);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={cs.nav}>
      <Container>
        <div className={cs.nav_container}>
          <h1 className={cs.wa}>WA.</h1>

          <Hidden smDown>
            <div className={cs.routes}>
              {routes.map((route, key) => {
                return (
                  <Route key={key} route={route} />
                );
              })}

              <IconButton className="theme" onClick={()=>{setTheme(!theme)}} >
                {theme?<Brightness7Icon/>:<Brightness4Icon/>}
              </IconButton>

            </div>
          </Hidden>

          <Hidden mdUp>
            <div>
            <IconButton className="theme" onClick={()=>{setTheme(!theme)}} >
                {theme?<Brightness7Icon/>:<Brightness4Icon/>}
              </IconButton>
            <IconButton
              className="menu_button"
              size="large"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              {openMenu ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </IconButton>
           
              </div>
          </Hidden>
        </div>

        <Hidden mdUp>
          <Collapse in={openMenu}>
            <div className={cs.responsive_routes}>
              <div className={cs.routes}>
                {routes.map((route, key) => {
                  return (
                    <Route key={key} route={route}/>
                  );
                })}
              </div>
            </div>
          </Collapse>
        </Hidden>
      </Container>
    </nav>
  );
};

export default NavBar;

const Route = (props) => {
  const { text, id } = props.route;
  return (
    <Link to={id} spy={true} smooth={true} offset={0} duration={1000}>
      <div>
        {text}
      </div>
    </Link>
  );
};

const routes_data = [
  {
    text: "Home",
    id: "Home",
  },
  {
    text: "About us",
    id: "About",
  },
  {
    text: "Services",
    id: "Services",
  },
  {
    text: "Resume",
    id: "Resume",
  },
  {
    text: "Portfolio",
    id: "Portfolio",
  },
  {
    text: "Pricing",
    id: "Pricing",
  },
  {
    text: "Contact",
    id: "Contact",
  },
];
