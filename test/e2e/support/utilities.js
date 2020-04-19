const fs = require('fs');

class Utilities {
    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    static takeScreenshot(name, failure = false) {
        const path = './test/reports/errorShots/';
        let screenshotName = '';
        fs.access(path, fs.F_OK, (err) => {
            if (err) {
                console.info("File path doesn't exists ... Let's create!");
                fs.mkdir(path, { recursive: true }, () => {});
            }
            // file exists
        });
        if (failure) {
            screenshotName = name.concat('_fail');
        }
        screenshotName = screenshotName.replace(/ /g, '_').concat('.png');
        browser.saveScreenshot(path + name);
        fs.readFile(`${path}/${name}`, function(err3, data) {
            allure.addAttachment(screenshotName, data, 'image/png');
        });
    }
}

module.exports = Utilities;
