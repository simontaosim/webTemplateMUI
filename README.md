## install the development steps

1. install ipfs and set ipfs api port on 5001 and ipfs gateway on 9090
2. install rethinkdb and its driver for python
3. cmd: rethinkdb restore taosimnet_seed 
this command is to init the database
4. cmd: npm install
this command is to install dependency
5. cmd: npm run build
6. cmd: pm2 start ./server/index.js
7. listen on localhost:8361