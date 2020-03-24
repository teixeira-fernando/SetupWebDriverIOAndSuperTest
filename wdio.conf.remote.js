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
    logLevel: 'error',
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
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000,
        compilers: ['@babel/register'],
    },
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test/reports/allure-results/',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: false,
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
    },
    afterTest() {
        browser.clearLocalStorage();
        browser.refresh();
    },
};
