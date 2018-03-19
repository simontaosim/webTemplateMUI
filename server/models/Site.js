const DataModel = require('../database/DataModel');

class Site extends DataModel{
    constructor(sitename, sitehost){
      super({});
      this.setTable("sites");
      this.sitename= sitename;
      this.sitehost= sitehost;
    }
    async getByHostname(hostname){
      
      try {
        let table = await this.getTable();
        let cursor = await table.filter(this.r.row('hostname').eq(hostname)).run(this.connection);
        
        return await cursor.toArray()[0];
        
      } catch (error) {
        console.log(error);
        return error.msg;
      }
    }
    async  seed(){
      try {
        let table = await this.getTable;
        table.insert([
          {
            hostname: "taosim.net", otherHostnames: [],
            title: "道者网",
            subTitle: "享受精彩链上生活",
            navs: [
              {name: "首页", link: "/"},
              {name: "资源", link: "/resource"},
              {name: "问答", link: "/faq"},
              {name: "博客", link: "/blogs"}
            ],
            blocks: [
              {
                type: "left-pic-right",
                pics: [],
                texts: [],
              },
              {
                type: "tw",
                texts: [],
                pics: []
                
              },
              {
                type: [],
                text
              }
            ]

          },
          {},
          {}
        ])
      } catch (err) {
        
      }
    }
    
  }

  module.exports = Site;