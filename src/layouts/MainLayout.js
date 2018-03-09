import PropTypes from 'prop-types';
import React from 'react'

import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import MenuAppBar from './MenuAppBar';
import Gun from 'gun';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 0,
  },
  child: {
      top: '100px',
      position: 'relative'
  }
});

class MainLayout extends React.Component{
   
  constructor(props){
    super(props);
    this.gun=Gun(['https://gun-cwrbxtgana.now.sh/gun']);
    window.gun = this.gun; 
  }
  render(){
    const { classes } = this.props;
      return(
        <div className={classes.root}>
            <MenuAppBar />
            <div className={classes.child}>
                {this.props.children}
            </div>
        </div>
  
      )
    
  
    
  }
}
MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withRoot(withStyles(styles)(MainLayout));