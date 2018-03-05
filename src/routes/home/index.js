import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import AppBanner from './banner.js'
class Home extends React.Component {
    state = {
        open: false,
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
        const { open } = this.state;
        return (
            <div >
              <AppBanner />
            <Dialog open={open} onClose={this.handleClose}>
              <DialogTitle>Super Secret Password</DialogTitle>
              <DialogContent>
                <DialogContentText>1-2-3-4-5</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary" onClick={this.handleClose}>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
            <Typography variant="display1" gutterBottom>
              Material-UI
            </Typography>
            <Typography variant="subheading" gutterBottom>
              example project
            </Typography>
            <Button variant="raised" color="secondary" onClick={this.handleClick}>
              Super Secret Password
            </Button>
          </div>
        )
    }
}

  
export default Home;
