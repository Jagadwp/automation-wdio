describe('Sauce Demo - Product Order', () => {
  before(async () => {
    // Login
    await browser.url('https://www.saucedemo.com/');
    await browser.sauceLogin();
  });

  after(async () => {
    // Logout
    await browser.sauceLogout();
  });

  it('Should complete product order', async () => {
    // Put products into shopping cart
    await $('#inventory_container').waitForDisplayed();
    let selectedProducts = await $$('button[data-test*="add-to-cart-sauce"]');
    let numOfProducts = selectedProducts.length;

    for (const product of selectedProducts) {
      await product.click();
      await browser.pause(500);
    }
    await browser.pause(4000);
    await (await $('.shopping_cart_link')).click();

    // Assert shopping cart
    await (await $('.cart_list')).waitForDisplayed();
    await (await $('#checkout')).click();

    // Fill customer information
    const firstName = 'Jagad Wijaya';
    const lastName = 'Purnomo';
    const postalCode = '60134';

    await (await $('.checkout_info')).waitForDisplayed();
    await (await $('#first-name')).setValue(firstName);
    await (await $('#last-name')).setValue(lastName);
    await (await $('#postal-code')).setValue(postalCode);
    await browser.pause(2000);
    await (await $('#continue')).click();

    // Assert final order review
    let cartItems = await $$('.cart_item');

    await (await $('.cart_list')).waitForDisplayed();
    await (await $('.summary_info')).waitForDisplayed();
    await browser.pause(2000);

    await expect(cartItems.length).toBe(numOfProducts);
    await (await $('#finish')).click();

    // Assert finish page
    let completeHeader = await $('.complete-header');
    let completeImage = await $('.pony_express');
    await browser.pause(2000);

    const message = 'THANK YOU FOR YOUR ORDER';
    await expect(completeHeader).toHaveTextContaining(message);
    await expect(completeImage).toBeDisplayed();
  });
});
