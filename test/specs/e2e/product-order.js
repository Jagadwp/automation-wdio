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
    // Assert shopping cart
    // Fill customer information
    // Assert final order review
  });
});
