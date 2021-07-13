import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container,IconButton,Paper,Typography,Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {HeadingBar} from '../component/index'

const Category = [
  {id:1, name:'Vegetables',icon:'https://www.zoovi.in/kisanhaat/img/promo1.jpg'},
  {id:2, name:'Fruits',icon:'https://www.zoovi.in/kisanhaat/img/promo2.jpg'},
  {id:3, name:'Meat',icon:'https://www.zoovi.in/kisanhaat/img/promo3.jpg'},
  {id:4, name:'Meat',icon:'https://www.zoovi.in/kisanhaat/img/promo1.jpg'},
]

const useStyles = makeStyles((theme) => ({
  sliderArrow: {
    width:30, height:30,borderRadius:100, background: "#fff", 
    boxShadow:'1px 1px 5px #ccc', position:'absolute',
    top:0, bottom:0, margin:'auto', zIndex:1
  },
  categoryBox:{
    textAlign:'center',
    // margin: theme.spacing(1, 0),
    // padding: theme.spacing(0, 1),
    '& img':{
      width:'100%',
      display:'block',
    }
  },
  paper:{
    overflow:'hidden'
  }
}))

function SampleNextArrow(props) {
  const classes = useStyles();
  const { className, style, onClick } = props;
  return (
    <div
      className={classes.sliderArrow}
      style={{ ...style, right:-5 }}
    >
      <IconButton size="small" color="primary" onClick={onClick} aria-label="upload picture" component="span">
      <ChevronRightIcon />
    </IconButton>
    </div>
  );
}

function SamplePrevArrow(props) {
  const classes = useStyles();
  const { className, style, onClick } = props;
  return (
    <div
      className={classes.sliderArrow}
      style={{ ...style, left:-5  }}
    >
      <IconButton size="small" color="primary" onClick={onClick} aria-label="upload picture" component="span">
      <ChevronLeftIcon />
    </IconButton>
    </div>
    
  );
}

export default function PromoSlider() {
  const classes = useStyles();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]};
  return (
    <>  
     <HeadingBar 
      title="Promos for you" 
      button={<Button color="primary"  variant="outlined" size="small">See more</Button>}
    />
    <Slider {...settings} style={{margin:-5 -5}}>
      {Category.map((item) => (
        <div className={classes.categoryBox}>
          <div style={{padding:10}}>
            <Paper elevation={0} classes={{root:classes.paper}}>
              <img src={item.icon}/>
            </Paper>
            </div>
        </div>
      ))}
    </Slider>
    </>
  );
}