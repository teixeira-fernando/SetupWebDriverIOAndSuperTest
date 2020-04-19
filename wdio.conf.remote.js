const allure = require('@wdio/allure-reporter').default;
const utilities = require('./test/e2e/support/utilities.js');

exports.config = {
    debug: process.env.DEBUG === '1',
    execArgv: process.env.DEBUG === '1' ? ['--inspect-brk=127.0.0.1:5859'] : [],
    specs: ['./test/e2e/specs/**/*.js'],
    exclude: [],
    capabilities: [
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-headless'],
            },
        },
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless'],
            },
        },
    ],
    sync: true,
    logLevel: 'info',
    outputDir: './test/reports/output',
    screenshotPath: './test/reports/errorShots/',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://todomvc.com/examples/angularjs/#/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    port: 4444,
    seleniumArgs: {
        seleniumArgs: ['-port', '4444'],
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 900000,
        helpers: [require.resolve('@babel/register')],
    },
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test/reports/allure-results/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
        [
            'junit',
            {
                outputDir: './test/reports/junit-results/',
                outputFileFormat: (opts) => {
                    // optional
                    return `TEST-wdio.junit.${opts.cid}.xml`;
                },
            },
        ],
    ],
    before() {
        const chai = require('chai');
        global.expect = chai.expect;
        global.assert = chai.assert;
        chai.Should();

        global.allure = allure;
        global.utilities = utilities;
        browser.setWindowSize(1440, 800);
    },
    beforeSuite: function(suite) {
        allure.addFeature(suite.name);
    },
    beforeTest: function(test, context) {
        allure.addEnvironment('BROWSER', browser.capabilities.browserName);
        allure.addEnvironment('BROWSER_VERSION', browser.capabilities.version);
        allure.addEnvironment('PLATFORM', browser.capabilities.platform);
    },
    afterTest: function(
        test,
        context,
        { error, result, duration, passed, retries },
    ) {
        if (error !== undefined) {
            try {
                var today = new Date();
                var date =
                    today.getFullYear() +
                    '-' +
                    (today.getMonth() + 1) +
                    '-' +
                    today.getDate();
                var time =
                    today.getHours() +
                    ':' +
                    today.getMinutes() +
                    ':' +
                    today.getSeconds();
                var dateTime = date + ' ' + time;
                utilities.takeScreenshot(
                    dateTime +
                        '_' +
                        test.title +
                        '_' +
                        browser.capabilities.browserName,
                    true,
                );
            } catch {
                console.log('>> Capture Screenshot Failed!');
            }
        }
    },
};
