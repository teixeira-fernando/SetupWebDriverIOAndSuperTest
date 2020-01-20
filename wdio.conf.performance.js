exports.config = {
    specs: ['./test/performance/**/*.js'],
    exclude: [],
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless'],
            },
        },
    ],
    path: '/',
    port: 9515,
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://todomvc.com/examples/angularjs/#/',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver', 'devtools'],
    chromeDriverArgs: ['--port=9515'], // default for ChromeDriver
    framework: 'mocha',
    mochaOpts: {
        timeout: 50000,
    },
    before() {
        const chai = require('chai');
        global.expect = chai.expect;
        global.assert = chai.assert;
        chai.Should();
    },
};
