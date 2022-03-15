const { browser, by, element, WebDriver, promise } = require("protractor");
var EC = protractor.ExpectedConditions;
var ProductPage = function () {
  this.ebayLog = element(by.css('img#gh-logo'));


  this.addToCard = async function () {
    await this.switchToNewTab();
    let addCardBtn = element(by.css('[id="isCartBtn_btn"]'));
    await addCardBtn.click();
    console.log("Click on add to cart");
    await this.closeCurrentTab();
  }

  this.closeCurrentTab = async function () {
    let handles = await browser.getAllWindowHandles();
    var secondWindowHandle = handles[1];
    var firstWindowHandle = handles[0];
    await browser.driver.switchTo().window(secondWindowHandle);
    await browser.driver.close();
    await browser.driver.switchTo().window(firstWindowHandle);
  }

  this.switchToNewTab = async function () {
    var handles = await browser.driver.getAllWindowHandles();
    var tab = await handles.pop();
    await browser.switchTo().window(tab);
    var url = "";
    do {
      url = await browser.getCurrentUrl();
    } while (!url.includes("itm"))
  }


};

module.exports = ProductPage;
