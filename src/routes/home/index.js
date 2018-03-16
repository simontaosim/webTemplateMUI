import React from 'react';
import Button from 'material-ui/Button';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import AppBanner from './banner.js';






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
        const { open } = this.state;
        return (
            <div >
              <AppBanner />
             
          </div>
        )
    }
}

  
export default Home;
