import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await browser.pause(300000);
    });
});


