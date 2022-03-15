const { Given, When, Then } = require('cucumber');

module.exports = function () {

    const EbayPage = require("../pages/ebay_page");
    const CartPage = require('../pages/cart_page');
    var ebayPage = new EbayPage();
    var cartPage = new CartPage();

    this.Given('Login to ebay', async function () {
        await ebayPage.loginWebPage();
    });

    this.When('Search and select product', { timeout: 60 * 1000 }, async function (dataTable) {
        var data = dataTable.raw();
        for (let i = 0; i < data.length; i++) {
            await ebayPage.selectProduct(data[i].toString());
        }
    });
    
    this.Then('Remove the first from card', { timeout: 60 * 1000 }, async function () {
        await ebayPage.loginWebPage();
        await ebayPage.cardElem.click();
        await cartPage.removeItemByIndex();
    });
};