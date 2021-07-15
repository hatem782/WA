import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    card:{
        height:"300px",
        width:"260px",
        backgroundColor:theme.palette.background_1.main,
        boxShadow:`0px 0px 50px ${theme.palette.blue_shadow.main}`,
        position:"relative",


        "& .left":{
            height:"100%",
            width:"30px",
            backgroundColor:theme.palette.primary.main,
            position:"absolute",
        },

        "& .right":{
            height:"100%",
            width:"100%",
        }
        
    },

    items:{
        padding:"30px 0px",

        "& :hover":{
            cursor:"pointer",
        },

        "& .active":{
            
            "&:after":{
                width:"200px",
                boxShadow:`0px 0px 60px ${theme.palette.blue_shadow.main}`,
            },

            "& h5":{
                color:"#fff",
            }


        },
    },

    item:{
        padding:"5px 0px 5px 5px",
        margin:"11px 0px",
        
        display:"flex",
        alignItems:"center",
        position:"relative",

        "&:after":{
            content: '""',
            position:"absolute",
            height:"100%",
            width:"40px",
            backgroundColor:theme.palette.primary.main,
            borderRadius:"500px", 
            transition:"all 0.5s",
        },

        "& .img":{
            height:"25px",
            width:"25px",
            backgroundSize:"75%",
            backgroundPosition:"center center",
            backgroundRepeat:"no-repeat",
            zIndex:"1",
            position:"relative",
        },

        "& h5":{
            margin:"0px 0px 0px 20px",
            padding:"0px",
            fontSize:"14px",
            fontWeight:"600",
            color:theme.palette.font.main,
            zIndex:"1",
            position:"relative",
            transition:"all 0.2s",
        },

    },

}));



const MenuCard=(props)=>{
    const {items,activeItem}=props;
    const cs = useStyles();
    return(
        <div className={cs.card} >
            
            <div className="left" />
            <div className={"right " + cs.items }>
                {
                    items.map((item,key)=>{
                        return <Item key={key} item={item} activeItem={activeItem} />
                    })
                }
            </div>
        </div>
    );
}


export default MenuCard;


const Item=(props)=>{
    const cs = useStyles();
    const {active=false,title,img,id}=props.item;
    const {activeItem}=props;

    return(
        <div 
        className={cs.item +" " +(active ? "active" :"")}
        onClick={()=>{activeItem(id)}} >
                <div className="img" style={{backgroundImage:`url(${img})`}} />
                <h5>{title}</h5>
        </div>
    );
}