const smallPause = 2000;
const bigPause = 5000;
const massivePause = 10000;

describe.skip('My First Test Suite', () => {
  it.only('Masuk Integra', async () => {
    await browser.url('https://my.its.ac.id/');

    // Login
    let usernameInput = await $('#username');
    let nextButton = await $('#continue');
    let passwordInput = await $('//input[contains(@id, "password")]');
    let loginButton = await $('//button[contains(@id, "login")]');

    await usernameInput.setValue('05111940000132');
    await nextButton.click();
    await passwordInput.setValue('Allahcuma1');
    await loginButton.click();

    // Masuk Integra
    await browser.url('https://akademik.its.ac.id/myitsauth.php');

    let menuContainer = await $('//form[contains(@id, "fMenu")]');
    await expect(menuContainer).toBeDisplayed();

    await browser.pause(smallPause);
  });

  it('My First WDIO Test', async () => {
    let url = 'https://www.example.com';

    await browser.url(url);
    await browser.pause(smallPause);

    // Old Way
    let pageTitle = await browser.getTitle();
    let pageUrl = await browser.getUrl();

    // Modern Way
    await expect(browser).toHaveTitleContaining('Example Domain');
    await expect(browser).toHaveUrlContaining('https://www.example.com/');

    let pageElement = await $('h1');
    let test = await expect(pageElement).toExist();
    await expect(pageElement).toBeDisplayed();
    await expect(pageElement).toHaveTextContaining('Domain');
    console.log('isi: ', typeof test);
  });

  it('Forms and Inputs', async () => {
    await browser.url('https://www.saucedemo.com/');

    let usernameInput = await $('//input[contains(@id, "user-name")]');
    let passwordInput = await $('#password');
    let loginButton = await $('#login-button');

    await usernameInput.setValue('standard_user');
    await passwordInput.setValue('secret_sauce');
    await browser.pause(smallPause);
    await loginButton.click();

    let inventoryContainer = await $('#inventory_container');
    await expect(inventoryContainer).toBeDisplayed();
  });

  it('Selectbox and Checkbox', async () => {
    await browser.setWindowSize(800, 700);
    await browser.url('https://devexpress.github.io/testcafe/example/');

    let selectBox = await $('#preferred-interface');
    let windowsRadio = await $('#windows');

    // Get by Attribute
    let checkboxes = await $$('[type="checkbox"]');

    await selectBox.selectByVisibleText('Both');
    await windowsRadio.click();

    for (const box of checkboxes) {
      await box.click();
    }

    await browser.pause(bigPause);

    for (const box of checkboxes) {
      await expect(box).toBeSelected();
    }
  });

  it('Device Simulation', async () => {
    let mobile = [375, 812];
    let tablet = [1024, 768];
    let desktop = [1650, 1050];

    // Mobile Device
    await browser.setWindowSize(mobile[0], mobile[1]);
    await browser.url('https://example.com/');
    await browser.pause(smallPause);

    // Tablet Device
    await browser.setWindowSize(tablet[0], tablet[1]);
    await browser.url('https://example.com/');
    await browser.pause(smallPause);

    // Desktop Device
    await browser.setWindowSize(desktop[0], desktop[1]);
    await browser.url('https://example.com/');
    await browser.pause(smallPause);
  });

  it('Screenshot', async () => {
    await browser.url('https://example.com/');
    await browser.saveScreenshot('./screenshot/my-screenshot.png');

    let h1 = await $('h1');
    await h1.saveScreenshot('./screenshot/h1-screenshot.png');
  });
});
