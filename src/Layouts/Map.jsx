import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';




const useStyles = makeStyles((theme) => ({

    container:{
        backgroundColor:theme.palette.background_1.main,
        border:`solid 4px ${theme.palette.background_2.main}`,
        borderRadius:"50%",
        "&:active":{
            cursor:"auto",
            backgroundColor:theme.palette.background_1.main,
            border:`solid 4px ${theme.palette.background_2.main}`,
        },
        "&:hover":{
            cursor:"auto",
            backgroundColor:theme.palette.background_1.main,
            border:`solid 4px ${theme.palette.background_2.main}`,
        }
    },

    icon:{
        color:theme.palette.primary.main,
        fontSize:"40px",
    }
}))


const Target=()=>{
    const cs = useStyles();
    return (<IconButton className={cs.container} >
        <RoomIcon className={cs.icon}  />
    </IconButton>)
}

const AnyReactComponent = () => <div> <Target/> </div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.7195777,
      lng: -73.8810578
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '620px', width: '100%',position:"absolute",zIndex:"0", }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyD5shMrOtXsVNz-ozoIkIRizuiF5wIb3a4` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.717}
            lng={-73.89478}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;