import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {Link} from "react-router-dom";
import { Button, TextField, Divider, Fab, Box, Grid, Container, Typography, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useSelector } from 'react-redux';
import slugify from 'react-slugify';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
    width: '100%',
    borderTop: '1px solid #dee2e6'
  },
  subscriber: {
    textAlign: 'center'
  },
  topBar: {
    padding: '24px 0'
  },
  subscriberBtn: {
    height: 40,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  subcribeField: {
    borderTopRightRadius: 0,

  },
  appIcon: {
    height: 30
  },
  socialIcon: {
    boxShadow: 'none',
    background: '#f0f0f0',
    '& svg': {
      fontSize: 16
    }
  },
  socialList:{
    margin:'10px 0'
  }

}));

export function FooterLinks(props) {
  return (
    <Box component="span" display="block" py={0.2}>
      <Link href={props.link} variant="caption" color="textSecondary">{props.label}</Link>
    </Box>
  )
}

export default function Footer() {
  const classes = useStyles();
  const cmsList = useSelector(state => state.app.cmsList);
  const settings = useSelector(state => state.app.settings);

  return (
    <>
      <div className={classes.root}>

    

        <Box py={4}>
          <Container>
            <Grid container
              direction="row"
              justify="space-between"
              alignItems="flex-start">

              {/* <Grid item>
                <Box component="span" display="block" py={1}>
                  <Typography variant="h6">Products</Typography>
                </Box>
                <FooterLinks label="Listing" link="/listing" />
                <FooterLinks label="Details" link="/detail" />
                <FooterLinks label="Trending" link="/trending" />
                <FooterLinks label="Recommended" link="#" />
                <FooterLinks label="Most Popular" link="#" />
              </Grid>

              <Grid item>
                <Box component="span" display="block" py={1}>
                  <Typography variant="h6">Checkout Process</Typography>
                </Box>
                <FooterLinks label="Cart" link="/cart" />
                <FooterLinks label="Order Address" link="#" />
                <FooterLinks label="Delivery Time" link="#" />
                <FooterLinks label="Order Payment" link="#" />
                <FooterLinks label="Checkout" link="#" />
                <FooterLinks label="Successful" link="#" />
              </Grid>

              <Grid item>
                <Box component="span" display="block" py={1}>
                  <Typography variant="h6">My Order</Typography>
                </Box>
                <FooterLinks label="My Order" link="#" />
                <FooterLinks label="Status Complete" link="#" />
                <FooterLinks label="Status on Process" link="#" />
                <FooterLinks label="Status Canceled" link="#" />
                <FooterLinks label="Review" link="#" />
              </Grid> */}

              <Grid item item md={2}>
                <Box component="span" display="block" py={1}>
                  <Typography variant="h6">My Account</Typography>
                </Box>
                <FooterLinks label="My account" link="/my-account" />
                <FooterLinks label="Promos" link="/promo" />
                <FooterLinks label="My address" link="#" />
                {/* <FooterLinks label="Terms & conditions" link="#" />
                <FooterLinks label="Help & support" link="#" />
                <FooterLinks label="Help ticket" link="#" />
                <FooterLinks label="Logout" link="#" /> */}
              </Grid>

              
              <Grid item md={6}>
                <Box component="span" display="block" py={1}>
                  <Typography variant="h6">Category</Typography>
                </Box>
                <Grid container>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                  <Grid item md={3}>
                      <FooterLinks label="Category 1" link="/my-account" />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={2}>
                <Box component="span" display="block" py={1}>
                  <Typography variant="h6">Social Media</Typography>
                </Box>

                
                <div className={classes.socialMedia}>
                  <Box component="div" display="block" >
                    <Fab color="inherit" aria-label="add" size="small" classes={{ root: classes.socialIcon }}>
                      <FacebookIcon />
                    </Fab>
                    <Box component="div" display="inline-block" m={1} >
                    &nbsp;&nbsp;<Link href={''} variant="caption" color="textSecondary">Facebook</Link>
                    </Box>
                  </Box>
                  <Box component="div" display="block" className={classes.socialList} >
                    <Fab color="inherit" aria-label="add" size="small" classes={{ root: classes.socialIcon }}>
                      <TwitterIcon />
                    </Fab>
                    <Box component="div" display="inline-block" m={1} >
                    &nbsp;&nbsp;<Link href={''} variant="caption" color="textSecondary">Twitter</Link>
                    </Box>
                  </Box>
                  <Box component="div" display="block" className={classes.socialList} >
                    <Fab color="inherit" aria-label="add" size="small" classes={{ root: classes.socialIcon }}>
                      <InstagramIcon />
                    </Fab>
                    <Box component="div" display="inline-block" m={1} >
                    &nbsp;&nbsp;<Link href={''} variant="caption" color="textSecondary">Instagram</Link>
                    </Box>
                  </Box>
                  <Box component="div" display="block" className={classes.socialList}>
                    <Fab color="inherit" aria-label="add" size="small" classes={{ root: classes.socialIcon }}>
                      <YouTubeIcon />
                    </Fab>
                    <Box component="div" display="inline-block" m={1} >
                    &nbsp;&nbsp;<Link href={''} variant="caption" color="textSecondary">Youtube</Link>
                    </Box>
                  </Box>
                </div>
                
              </Grid>

              <Grid item>
                <Box component="span" display="block" py={1}>
                  <Typography variant="h6">Information</Typography>
                </Box>
                {cmsList?.map(cms => <FooterLinks label={cms?.title} link={"/" + slugify(cms.title)} />)}
                {/* <FooterLinks label="Conditions" link="#" />
                <FooterLinks label="Help Support" link="#" />
                <FooterLinks label="Refund Payment" link="#" />
                <FooterLinks label="FAQ" link="#" />
                <FooterLinks label="Sign In" link="login" /> */}
              </Grid>

            </Grid>
          </Container>
        </Box>
        <Divider />
        <Box py={4}>
          <Container>
            <Grid container justify="space-between" direction="row" alignItems="center">
              <Grid >
                <Box component="span" display="inline">
                  <Typography variant="caption">© 2021 {settings?.app_name}</Typography>
                </Box>
                {/* <Box component="span" display="inline" mx={2}>
                  <Link href="#" variant="caption" color="textSecondary">Privacy</Link>
                </Box>
                <Box component="span" display="inline">
                  <Link href="#" variant="caption" color="textSecondary">Terms & Conditions</Link>
                </Box> */}
              </Grid>

              <Grid >

                <Box component="span" display="inline" mx={2}>
                  <Link href="#"><img src="https://www.zoovi.in/kisanhaat/img/appstore.png" className={classes.appIcon} /></Link>
                </Box>
                <Box component="span" display="inline">
                  <Link href="#"><img src="https://www.zoovi.in/kisanhaat/img/playmarket.png" className={classes.appIcon} /></Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

      </div>
    </>
  );
}
