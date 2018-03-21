import React from 'react';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import AppBanner from './banner.js';

import { withStyles } from 'material-ui/styles';
import {connect} from 'react-redux';
import Image from '../myfile.jpg';

const styles = theme => ({
    root: {
        color: "white",
        position: "relative",
        height: "auto",
        width: "100%",
       
      
    },
    mainContent:{
        position: "relative",
        top: "-85px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    mainContentBlock:{
        position: "relative",
        paddingTop: "25px",
        justifyContent: "center",        
        width: "80%",
        [theme.breakpoints.down('md')]: {
            position: "relative",
            paddingTop: "20px",
           },
    },
    paper: {
    
      textAlign: "center",
      textIndent: "0",
      backgroundColor: "black",
      marginLeft: '10%',
      marginRight: '10%',
      width: "32%",
      display: "block",
      marginTop: "25px", 
      [theme.breakpoints.down('md')]: {
        width: "80%",
        marginLeft: '5%',
        marginRight: '5%',
      },
    },
    papers: {
        display: "flex",
        marginTop: "10px", 
        marginBottom: "20px",
        width: "100%",        
               
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column",
           marginTop: "5px",        
           marginBottom: "5px", 
        alignItems: "center",
           
           justifyContent: "center",       
           
          },
    },
    papersRound: {
        display: "flex",
        marginTop: "10px", 
        marginBottom: "20px",
        width: "100%",  
        justifyContent: "center",      
               
        [theme.breakpoints.down('md')]: {
           marginTop: "5px",  
           width: "100%",         
           marginBottom: "5px", 
           display: "block",
           position: "relative",
           left: "5%"
           
           
           
          },
    },
    paperRound: {
        width: "120px",
        height: "120px",
        MozTransitionDuration: "0.8s", backgroundColor: "#FFFFFF",
        backgroundPosition: "-30px 50%",
        border: "1px solid #CCCCCC",
        borderRadius: "84px",
        display: "block",
        textAlign: "center",
        textIndent: "0",
        marginLeft: '1%',
        marginRight: '1%',
        marginTop: "25px", 
        [theme.breakpoints.down('md')]: {
            width: "100px",
            height: "100px",
            float: "left", 
            display: "inline-block",
            padding: "10px"
           
          },
      }
   
  });




class Home extends React.Component {
    state = {
        open: false,
        imgSrc: null
      };
    
    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleClick = () => {
        this.setState({
            open: true,
        });
    };
    render(){
        console.log(Image);
        
        const { classes, dispatch } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
              <AppBanner />
              <div className={classes.mainContent}>
                <div className={classes.mainContentBlock} >
                    <Typography className={classes.paper.Typography} style={{color: "white"}} variant="headline"  component="h3">
                            认识WMV
                    </Typography>
                    <div className={classes.papers}>
                        <Paper className={classes.paper} square={false} elevation={8}>
                            
                            <Typography style={{color: "white"}} component="p">
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                            </Typography>
                        </Paper>
                        <Paper className={classes.paper} square={false} elevation={8}>
                            
                            <Typography style={{color: "white"}} component="p">
                            WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                            </Typography>
                        </Paper>
  
                    </div>
                                    
                </div>
                <div className={classes.mainContentBlock}>
       
                    <Typography className={classes.paper.Typography} style={{color: "white"}} variant="headline"  component="h3">
                        我们该如何使用
                    </Typography>
                    <div className={classes.papers}>
                        <Paper className={classes.paper} square={false} elevation={8}>
                            
                            <Typography style={{color: "white"}} component="p">
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                            </Typography>
                        </Paper>
                        <Paper className={classes.paper} square={false} elevation={8}>
                            
                            <Typography style={{color: "white"}} component="p">
                            WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                            </Typography>
                        </Paper>
  
                    </div>
                    
                </div>
                <div className={classes.mainContentBlock}>
                        <Typography className={classes.paper.Typography} style={{color: "white"}} variant="headline"  component="h3">
                            为什么我们需要MWV？
                        </Typography>
                        <div className={classes.papers}>
                        <Paper className={classes.paper} square={false} elevation={8}>
                            
                            <Typography style={{color: "white"}} component="p">
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                            </Typography>
                        </Paper>
                        <Paper className={classes.paper} square={false} elevation={8}>
                            
                            <Typography style={{color: "white"}} component="p">
                            WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                                WMV, 基于区块链技术的成人产业平台
                            </Typography>
                        </Paper>
  
                    </div>
                
                </div>
                <div className={classes.mainContentBlock}>
                     <Typography className={classes.paper.Typography} style={{color: "white"}} variant="headline"  component="h3">
                            团队介绍
                        </Typography>
                        <div className={classes.papersRound}>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                       1
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper  style={{
                        backgroundColor: "black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        height: 300,
                        width:  250,
                        padding: 20
                    }} square={false} elevation={8}>
                            <img className={classes.paperRound} src={Image} alt="Simon Xu" />
                            <Typography  style={{color: "white"}}   component="h4">
                                Simon XU
                            </Typography>
                            <Typography style={{color: "white"}} component="p">
                                架构师，早年在菲律宾开发博彩系统，后归国创业
                               
                            </Typography>
                    </Paper>
                  
                   
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    </div>
                    
                </div>
                <div className={classes.mainContentBlock}>
                     <Typography className={classes.paper.Typography} style={{color: "white"}} variant="headline"  component="h3">
                            顾问团队
                        </Typography>
                        <div className={classes.papersRound}>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                       1
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    <Paper className={classes.paperRound} square={false} elevation={8}>
                        2
                    </Paper>
                    </div>
                    
                </div>
                <div id="footer" className={classes.mainContentBlock}>
                        <h4>联系我们</h4>
                        <div className={classes.papers}>
                            <Paper   zDepth={1} circle={true} >
                        
                            </Paper>
                            <Paper   zDepth={2} circle={true} />
                    </div>
                    
                </div>
            </div>
             
          </div>
        )
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  function mapUserState(state){
      return {
          user: state.AppUser
      }
  }
  
export default connect(mapUserState)(withStyles(styles)(Home));