export default class Page {

    constructor(){
    //nothing yet 
    }
      open (path) {
        if(path != undefined){
          browser.url(browser.options.baseUrl + path)
        } 
        else {
          browser.url(browser.options.baseUrl)
        }
      }
    }