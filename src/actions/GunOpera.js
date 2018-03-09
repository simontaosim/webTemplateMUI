import Gun from 'gun';
require('gun/sea/user.js');
const gun = new Gun(['https://gun-cwrbxtgana.now.sh/gun']);

const user = gun.user();

export function userReg(username, password, successCallBack, failCallBack){
    user.create(username, password, function(ack){
      if(ack.ok ===0 && ack.pub){
        successCallBack(ack);
      }else{
        failCallBack(ack.err);
      } 
    });
}