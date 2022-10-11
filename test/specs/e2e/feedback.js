describe.skip('Feedback Form', () => {
  it('Should submit feedback form with all the values', async () => {
    const name = 'Jagadul';
    const email = 'jagadpurnomo26@gmail.com';
    const subject = 'Bug Report';
    const comment = 'lorem ipsum dang ding dung';

    await browser.url('http://zero.webappsecurity.com/index.html');
    await browser.waitAndClick('#feedback');
    await (await $('#name')).setValue(name);
    await (await $('#email')).setValue(email);
    await (await $('#subject')).setValue(subject);
    await (await $('#comment')).setValue(comment);

    await browser.pause(5000);
    await (await $('input[type="submit"]')).click();

    
    const result = await $('.offset3.span6');
    await expect(browser).toHaveUrlContaining('sendFeedback.html');
    await expect(result).toHaveTextContaining(`Thank you for your comments, ${name}`);
  });
});
