describe.skip('Login Flow', () => {
  before(async () => {
    await browser.url('http://zero.webappsecurity.com/index.html');
  });

  it('Should not login with invalid username and password', async () => {
    await browser.waitAndClick('#signin_button');
    await $('#login_form').waitForDisplayed();
    await (await $('#user_login')).setValue('test');
    await (await $('#user_password')).setValue('test');
    await (await $('input[type="submit"]')).click();

    const errorMessage = await $('.alert-error');
    await expect(errorMessage).toHaveTextContaining('and/or pass');
  });

  it('Reset Account Password', async () => {
    const email = 'jagadpurnomo26@gmail.com';

    await browser.waitAndClick('a[href*="forgot"]');
    await $('#send_password_form').waitForDisplayed();

    await (await $('#user_email')).setValue(email);
    await (await $('input[type="submit"]')).click();

    const successMessageBox = await $('.offset3.span6');
    await expect(successMessageBox).toHaveTextContaining(`email: ${email}`);
  });
});
