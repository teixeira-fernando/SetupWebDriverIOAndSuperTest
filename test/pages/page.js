import allureReporter from "@wdio/allure-reporter";

export default class Page {

    constructor(){

    }
      open (path) {
        if(path != undefined){
          browser.url(browser.options.baseUrl + path)
        } 
        else {
          browser.url(browser.options.baseUrl)
        }
      }

      saveScreenshot(){
         browser.takeScreenshot();
      }
}