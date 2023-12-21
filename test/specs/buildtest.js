import buildArmy from '../pageobjects/armybuild.js'
import LoginPage from '../pageobjects/login.js'
import PrivateCredentials from '../pageobjects/logincredentials.js'





describe('Builing an Army', () => {
    it('should build a rebel army', async () => {
        await LoginPage.mainPage()
        await LoginPage.buttonLogin()
        await LoginPage.loginInfo(PrivateCredentials.username, PrivateCredentials.password)
        await buildArmy.rebelsPage()
        await buildArmy.rebelArmy()
       
    })


})