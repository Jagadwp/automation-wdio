describe('Advance Testing', () => {
  beforeEach(async () => {
    await loadWebsite();
  });

  it('File Upload 1', async () => {
    const filePath = './screenshot/my-screenshot.png';
    await browser.customFileUpload(filePath);
    await browser.pause(2000);
  });

  it('File Upload 2', async () => {
    const filePath = './screenshot/my-screenshot.png';
    await browser.customFileUpload(filePath);
    await browser.pause(2000);
  });

  it('File Upload 3', async () => {
    const filePath = './screenshot/my-screenshot.png';
    await browser.customUploadFile(filePath);
    await browser.pause(2000);
  });
});

const loadWebsite = async () => {
  await browser.url('https://the-internet.herokuapp.com/upload');
};
