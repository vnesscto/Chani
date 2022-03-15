const { browser, by, element, WebDriver } = require("protractor");
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

var EC = protractor.ExpectedConditions;

var CartPage = function () {
  this.cardPageTitle = element(by.xpath('//h1[contains(text(),"Shopping cart")]'));
  this.removeItemByIndex = async function () {
    // browser.wait(EC.visibilityOf(this.cardPageTitle), 1000000, 'Element taking too long to appear in the DOM');
    var removeItemBtn = element.all(by.css('button[data-test-id="cart-remove-item"]'));
    var itemsTitles = element.all(by.css('h3.item-title'));
    let firstItemTitle = await itemsTitles.last().getAttribute("outerText");
    await removeItemBtn.last().click();
    console.log(`Removed the item: ${firstItemTitle} from the cart list`);
  }

};

module.exports = CartPage;
