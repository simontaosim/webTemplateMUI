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

const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI({host: 'localhost', port: '5002', protocol: 'http'});




let saveImageOnIpfs = (reader) => {
  return new Promise(function(resolve, reject) {
    const buffer = Buffer.from(reader.result);
    ipfs.add(buffer).then((response) => {
      console.log(response)
      resolve(response[0].hash);
    }).catch((err) => {
      console.error(err)
      reject(err);
    })
  })
}


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
              <div className="App">

              <h2>上传图片到IPFS：</h2>
              <div>
                <label id="file">Choose file to upload</label>
                <input type="file" ref="file" id="file" name="file" multiple="multiple"/>
              </div>
              <div>
                <button onClick={() => {
                    var file = this.refs.file.files[0];
                    var reader = new FileReader();
                    // reader.readAsDataURL(file);
                    reader.readAsArrayBuffer(file)
                    reader.onloadend = (e) => {
                      console.log(reader);
                      // 上传数据到IPFS
                      saveImageOnIpfs(reader).then((hash) => {
                        console.log(hash);
                        this.setState({imgSrc: hash})
                      });
                    }

                  }}>Submit</button>
              </div>
              {
                this.state.imgSrc
                  ? <div>
                      <h2>{"http://localhost:9090/ipfs/" + this.state.imgSrc}</h2>
                      <img alt="区块链部落" style={{}} src={"http://localhost:9090/ipfs/" + this.state.imgSrc}/>
                    </div>
                  : <img alt=""/>
              }
              </div>
          </div>
        )
    }
}

  
export default Home;
