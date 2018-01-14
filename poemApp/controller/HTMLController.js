class HTMLController {
  constructor(){

  }

  AllParse(text,callback){
    this.XSSParser(text)
      .then(this.LinkParser)
      .then(callback)
      .catch((err)=>{
        throw err 
      })
  }

  XSSParser(text){
    return new Promise((resolve,reject)=>{
      resolve(text.replace(/</g,"&lt;"));
    })
  }

  LinkParser(text){
    return new Promise((resolve,reject)=>{
      var linkReplacedTest = text.replace(/^(http|https)\:\/\/.*$/g,(match)=>{
        console.log(match);
        return "<a href="+match+">"+match+"</a>";
      });
      resolve(linkReplacedTest);

    })
  }
}

module.exports = HTMLController
