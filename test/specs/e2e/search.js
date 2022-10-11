describe.skip('Search Feature', () => {
  it('Should search for values using keyboard press', async () => {
    
    await browser.url('http://zero.webappsecurity.com/index.html');
    await (await $('#searchTerm')).waitForDisplayed();
    await (await $('#searchTerm')).setValue('bank');
    await browser.pause(2000);

    await browser.keys('Enter');
    await browser.pause(2000);

    const results = await $('h2');

    await expect(results).toBeExisting();
    await expect(results).toHaveTextContaining('Search Results:');
  });
});
