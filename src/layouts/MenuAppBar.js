import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem, MenuList } from 'material-ui/Menu';
import Hidden from 'material-ui/Hidden';
import withWidth from 'material-ui/utils/withWidth';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import WorkIcon from 'material-ui-icons/Work';
import BeachAccessIcon from 'material-ui-icons/BeachAccess';
import Button from 'material-ui/Button';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
const styles = theme => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: '1000'
    
  },
  appbar: {
    backgroundColor: "rgba(4, 4, 4, 0.1)",
    borderBottom: "white 1px outset",
    // Match [0, md + 1[
    //       [0, lg[
    //       [0, 1280px[
    [theme.breakpoints.down('md')]: {
      backgroundColor: "rgba(4, 4, 4, 0.3)",
    },
  },
  drawerPaper: {
    position: 'relative',
    width: "50px",
  },
  flex: {
    flex: 1,
    color: "white",
    fontWeight: 'bolder',
    fontSize: '29px'
  },
  button: {
    margin: theme.spacing.unit*0.5,
    color: "white",
    fontWeight: 'bolder',
    fontSize: '20px',
    ListItemText: {
        color: 'white',
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: "white",
      opacity: 0.1,
  },
  menuList: {
    color: "white"
  },
  list: {
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.31)", height: '100%'
  }
});

class MenuAppBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            auth: true,
            anchorEl: null,
            drawer: false,
            open: false,
        }
    }
    handleClick = () => {
        this.setState({ open: !this.state.open });
      };
    
      handleClose = () => {
        if (!this.state.open) {
          return;
        }
    
        // setTimeout to ensure a close event comes after a target click event
        this.timeout = setTimeout(() => {
          this.setState({ open: false });
        });
      };
    toggleDrawer = (open)=>() => {
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
    if (!this.state.open) {
        return;
      }
    this.timeout = setTimeout(() => {
    this.setState({ open: false });
    });
    this.setState({ anchorEl: null });
  };
  componentDidMount(){
      document.title = "币链名字";
      clearTimeout(this.timeout);
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const { open } = this.state;
    const sideList = (
        <div>
                <List component="nav">
                <ListItem button tabIndex={0}
                                role="button"
                                onClick={this.toggleDrawer(false)}
                                onKeyDown={this.toggleDrawer(false)}
                                
                                >
                <ListItemIcon className={classes.button}>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText classes={{primary: classes.button}} primary="首页" />
                </ListItem>
                <ListItem button>
                <ListItemIcon  className={classes.button}>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText  classes={{primary: classes.button}} primary="资源" />
                </ListItem>
                <ListItem button>
                <ListItemIcon className={classes.button}>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText classes={{primary: classes.button}} primary="问答" />
                </ListItem>
                <ListItem button>
                <ListItemIcon className={classes.button}>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText classes={{primary: classes.button}} primary="博客" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav">
                <ListItem button>
                <ListItemText classes={{primary: classes.button}} primary="个人中心" />
                </ListItem>
                <ListItem button>
                <ListItemText classes={{primary: classes.button}} primary="资料" />
                </ListItem>
                <ListItem button component="a" href="#">
                <ListItemText classes={{primary: classes.button}} primary="安全登出" />
                </ListItem>
            </List>
        </div>
      );
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Hidden mdUp>
                <IconButton onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Drawer classes={{
                    paper: classes.list,
                    button: classes.button,
                    }} open={this.state.drawer} onClose={this.toggleDrawer(false)}>
                    {sideList}
                </Drawer>
            </Hidden>
           
            <Typography variant="title" color="inherit" className={classes.flex}>
              币链logo
            </Typography>
            
            <Hidden mdDown>
            <div>
                <Button className={classes.button}>首页</Button>
                <Button color="primary" className={classes.button}>
                    资源
                </Button>
                <Button color="primary" className={classes.button}>
                    问答
                </Button>
                <Button color="primary" className={classes.button}>
                    博客
                </Button>
            </div>
            {auth && (
             <Manager>
             <Target>
               <IconButton
                 aria-owns={open ? 'menu-list' : null}
                 aria-haspopup="true"
                 onClick={this.handleClick}
               >
                <AccountCircle />
               </IconButton>
             </Target>
             <Popper
             
               placement="bottom-start"
               eventsEnabled={open}
               className={classNames({ [classes.popperClose]: !open })}
             >
               <ClickAwayListener onClickAway={this.handleClose}>
                 <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                   <Paper className={classes.paper}>
                     <MenuList role="menu" >
                       <MenuItem  className={classes.menuList} onClick={this.handleClose}>资料</MenuItem>
                       <MenuItem  className={classes.menuList} onClick={this.handleClose}>个人中心</MenuItem>
                       <MenuItem  className={classes.menuList} onClick={this.handleClose}>安全退出</MenuItem>
                     </MenuList>
                   </Paper>
                 </Grow>
               </ClickAwayListener>
             </Popper>
           </Manager>
            )}
            </Hidden>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(MenuAppBar);