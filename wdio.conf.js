exports.config = {
    debug: process.env.DEBUG === '1',
    execArgv: process.env.DEBUG === '1' ? ['--inspect-brk=127.0.0.1:5859'] : [],
    specs: ['./test/e2e/specs/**/*.js'],
    exclude: [],
    capabilities: [
        {
            browserName: 'chrome',
        },
    ],
    sync: true,
    logLevel: 'info',
    outputDir: './test/reports/output',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://todomvc.com/examples/angularjs/#/',
    waitforTimeout: 50000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
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
