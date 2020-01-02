import allureReporter from "@wdio/allure-reporter";

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

      saveScreenshot(){
          // ​browser.takeScreenshot().then(function (png) {
          // ​   allureReporter.addAttachment('Screenshot', f​unction () {
          //         return new Buffer(png, 'base64')
          //     }, 'image/png')
          // })png
      }
}