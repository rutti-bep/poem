class HTMLController {
  constructor(){

  }

  AllParse(text,callback){
    this.XSSParser(text)
      .then(this.LinkParser)
      .then(this.NewLineParser)
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
      var linkReplacedTest = text.replace(/(http|https)\:\/\/.*(\s|$)/g,(match)=>{
        // TODO : titleとってくるようにしたいね？
        console.log(match);
        return "<a href="+match+">"+match+"</a>";
      });
      resolve(linkReplacedTest);

    })
  }

  NewLineParser(text){
    return new Promise((resolve,reject)=>{
      resolve(text.replace(/\r\n/g, "<br>"))
    })
  }
}

module.exports = HTMLController
