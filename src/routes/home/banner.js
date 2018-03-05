import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';



const styles = theme => ({
  root: {
    background: 'url(https://eos.io/images/dawn_topbanner.jpg)',
    backgroundSize: 'cover',
    width: '100%',
    height: '600px',
    top: '-100px',
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
  },
  button: {
    margin: theme.spacing.unit,
  },
 
});

class AppBanner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            auth: true,
            anchorEl: null,
            drawer: false,
        }
    }
    toggleDrawer = (open) => () => {
        this.setState({
            drawer: open,
        });
    };
    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    componentDidMount(){
        
    }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
   
    return (
      <div className={classes.root}>
            <div className={classes.slogan}>
                <h1>HCASH</h1>
                <h3>重塑价值</h3>
                <Button variant="raised" className={classes.button}>
                    了解更多
                </Button>
                <Button variant="raised"  className={classes.button}>
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

export default withStyles(styles)(AppBanner);