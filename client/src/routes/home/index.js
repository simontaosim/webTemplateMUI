import React from 'react';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
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
        const style = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          };
        const { open } = this.state;
        return (
            <div >
              <AppBanner />
              <div style={
                  {
                      background: "black",
                      color: "white",
                      position: "relative",
                      top: "-120px",
                      height: "100%"
                  }
              }>
              <div >
                  <h3>什么是wmv?</h3>
                <Paper style={style} zDepth={1} />
                <Paper style={style} zDepth={2} />
                
            </div>
            <div>
                  <h3>我们该如何使用wmv?</h3>
                <Paper style={style} zDepth={1} />
                <Paper style={style} zDepth={2} />
                
            </div>
            <div>
                  <h3>WMV的优势?</h3>
                <Paper style={style} zDepth={1} />
                <Paper style={style} zDepth={2} />
               
            </div>
            <div>
                  <h3>团队介绍?</h3>
                <Paper style={style} zDepth={1} circle={true} />
                <Paper style={style} zDepth={2} circle={true} />
                
            </div>
            <div id="footer">
                    <h4>联系我们</h4>
                  <Paper style={style} zDepth={1} circle={true} >
            
                  </Paper>
                <Paper style={style} zDepth={2} circle={true} />
                
            </div>
            </div>
             
          </div>
        )
    }
}

  
export default Home;
