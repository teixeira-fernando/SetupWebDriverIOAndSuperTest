const assert = require('assert')

describe('JSON.org page', () => {
    before(() => {
        browser.enablePerformanceAudits({
            networkThrottling: 'online',
            cpuThrottling: 4,
            cacheEnabled: true
        })
        // The following network throttling profiles are available: offline, GPRS, Regular 2G, Good 2G, Regular 3G, Good 3G, Regular 4G, DSL, Wifi and online (no throttling).
    })

    it('should load within performance budget', () => {

        browser.url(browser.options.baseUrl);

        const metrics = browser.getMetrics()
        const score = browser.getPerformanceScore() // get Lighthouse Performance score
        console.log(score);
        assert.ok(score >= .80) // Lighthouse Performance score is at 80% or higher
        assert.ok(metrics.speedIndex < 1500)  // check that speedIndex is below 1.5ms
    })

    after(() => {
        browser.disablePerformanceAudits()
    })
})