# Midhaz E2E Tests

# Stack: 
* NPM
* WebDriverIO
* Zalenium
* Cucumber
* Allure Report

# Scripts:
* Execução de testes: npm run test

Outras configurações possíveis do zalenium:

 * "zalenium:setup": "docker run --rm -ti --name zalenium -p 4444:4444 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/videos:/home/seluser/videos --privileged dosel/zalenium start --chromeContainers 3 --firefoxContainers 2"