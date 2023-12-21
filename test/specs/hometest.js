import legionHQ from '../pageobjects/homepage.js'
import LoginPage from '../pageobjects/login.js'


describe('Testing Home page', () => {
    it('should test all buttons on home page', async () => {
        await LoginPage.mainPage()
        await legionHQ.testHome()
       
    })


})