const { browser, by, element, WebDriver, ExpectedConditions, promise, setDefaultTimeout } = require("protractor");

const ProductPage = require("./product_page.js");
const productPage = new ProductPage();

var EC = protractor.ExpectedConditions;


var EbayPage = function () {
  this.ebayLogo = element(by.id('gh-logo'));
  this.searchElm = element(by.css('[aria-label="Search for anything"]'));
  this.cardElem = element(by.css('#gh-eb li#gh-minicart-hover'));

  this.loginWebPage = async function () {
    await browser.manage().timeouts().implicitlyWait(20);
    browser.ignoreSynchronization = true
    await browser.get('https://www.ebay.com/');
    console.log("logged to ebay")
  };

  this.selectProduct = async function (txt) {
    await this.searchElm.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")).sendKeys(protractor.Key.BACK_SPACE);
    await this.searchElm.sendKeys(txt + protractor.Key.ENTER);
    // browser.wait(EC.presenceOf(element(by.xpath("//a[@class=\"s-item__link\" and not(contains(@data-track,'\"operationId\":\"\"'))]"))), 1000000, 'Element taking too long to appear in the DOM');
    var items = element.all(by.xpath("//a[@class=\"s-item__link\" and not(contains(@data-track,'\"operationId\":\"\"'))]"));
    let productName = await items.first().getAttribute("outerText");
    await items.first().click();
    console.log("Select product: " + productName)
    await productPage.addToCard();
  }
};

module.exports = EbayPage;
