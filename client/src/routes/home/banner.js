import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';
import Image from '../banner.jpg';

const styles = theme => ({
  root: {
    background: 'url('+Image+')',
    backgroundSize: 'cover',
    width: '100%',
    height: '600px',
    top: '5px',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    
  },
  slogan: {
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.38)",
    flex: 0.5,
    top: '180px',
    width: '60%',
    position: 'relative',
  }
 
});

class AppBanner extends React.Component {


  render() {
    const { classes, dispatch } = this.props;
   
    return (
      <div className={classes.root}>
            <div className={classes.slogan}>
                <h1>WMV</h1>
                <h3>欲说还羞流于链</h3>
                <Button variant="raised" className={classes.button}>
                    了解更多
                </Button>
                <Button onClick={()=>{}} variant="raised"  className={classes.button}>
                    立即认购
                </Button>
            </div>
      </div>
    );
  }
}

AppBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapUserState(state){
    return {
        user: state.AppUser
    }
}

export default connect(mapUserState)(withStyles(styles)(AppBanner));