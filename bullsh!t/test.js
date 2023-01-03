const {Builder, Browser, By, Key, until, ChromiumWebDriver} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('http://127.0.0.1:5500/bullsh!t/index.html?/');
    // let email = await driver.findElement(By.id('#email'))
    // let password = await driver.findElement(By.id('#password'))

    driver.findElement(By.id("name")).sendKeys("name");
    driver.findElement(By.id("email")).sendKeys("baonhat@gmail.com");
    driver.findElement(By.id("password")).sendKeys("nhodimioiA1");
    driver.findElement(By.id("confirmPW")).sendKeys("nhod");
  } finally {
    // driver.findElement(By.id("login")).click();
    //ChromiumWebDriver.executeScript("$('#container').blur()");

  }
})();