# E2E Tests with WebDriver IO and API tests with SuperTest - Setup

# Stack: 
* NPM
* WebDriverIO
* Babel (to include ES6 support)
* Zalenium
* Selenium Grid via Docker compose file
* Cucumber
* Allure Report
* EsLint
* Prettier
* Husky
* Chai
* Super Test + Mocha (For API Tests)
* Dotenv (For environment variables setup)

# Scripts:
* Test Execution Locally: 
> npm run test:local
* Test Execution remotely: 
> npm run test:remoteGrid
* Check code format:
> npm run code:check
* Fix code issues:
> npm run code:format
* To generate Allure Report:
> npm run allure-report
* To execute API tests:
> npm run test:api

# Hooks

I have configured using Husky, a hook for before the commit to execute the code checker, with ESLint and Prettier

# Other stuff

Another possible configuration for zalenium:

 > "zalenium:setup": "docker run --rm -ti --name zalenium -p 4444:4444 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/videos:/home/seluser/videos --privileged dosel/zalenium start --chromeContainers 3 --firefoxContainers 2"