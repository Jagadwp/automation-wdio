describe('Advance Testing', () => {
  beforeEach(async () => {
    await loadWebsite();
  });

  it('File Upload 1', async () => {
    const filePath = './screenshot/my-screenshot.png';
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit');
    await browser.pause(2000);
  });

  it('File Upload 2', async () => {
    const filePath = './screenshot/h1-screenshot.png';
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit');
    await browser.pause(2000);
  });

  it('File Upload 3', async () => {
    const filePath = './screenshot/my-screenshot.png';
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit');
    await browser.pause(2000);
  });

  it('Display Title and Url', async () => {
    let result = await browser.getTitleAndUrl();
    console.log('TITLE = ' + result.title);
    console.log('URL = ' + result.url);

    await browser.waitAndClick('#file-submit');
    await browser.pause(5000);
  });

  it('Change Browser Session', async () => {
    console.log('SESSION BEFORE RELOAD: ' + browser.sessionId);
    await browser.reloadSession();
    console.log('SESSION AFTER RELOAD: ' + browser.sessionId);
  });

  it('Create and Switch New Window', async () => {
    await browser.url('https://google.com');
    await browser.newWindow('https://my.its.ac.id');
    await browser.pause(3000);
    await browser.switchWindow('google.com');
    await browser.pause(3000);
  });

  it('Network Throttle', async () => {
    await browser.throttle('Regular2G');
    await browser.url('https://webdriver.io');
    await browser.pause(3000);

    await browser.throttle('Regular4G');
    await browser.url('https://webdriver.io');
    await browser.pause(3000);

    await browser.throttle('offline');
    await browser.url('https://webdriver.io');
    await browser.pause(3000);
  });

  it('Execute Javascript Code', async () => {
    const result = await browser.execute(
      (a, b) => {
        return a + b;
      },
      22,
      7
    );
    await expect(result).toBe(29);
  });

  it.only('Execute Async Javascript Code', async () => {
    const result = await browser.executeAsync(
      (a, b, done) => {
        setTimeout(() => {
          done(a + b);
        }, 3000);
      },
      5,
      10
    );
    await expect(result).toBe(15);
  });
});

const loadWebsite = async () => {
  await browser.url('https://the-internet.herokuapp.com/upload');
};
