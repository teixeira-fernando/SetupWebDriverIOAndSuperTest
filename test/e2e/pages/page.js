export default class Page {
    open(path) {
        if (path !== undefined) {
            browser.url(browser.options.baseUrl + path);
        } else {
            browser.url(browser.options.baseUrl);
        }
    }

    saveScreenshot() {
        browser.takeScreenshot();
    }
}
