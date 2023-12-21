import LoginPage from '../pageobjects/login.js'
import PrivateCredentials from '../pageobjects/logincredentials.js'

describe('Login Process', () => {
    it('should log you in', async () => {
        await LoginPage.mainPage()
        await LoginPage.buttonLogin()
        await LoginPage.errorMessage('johnjakanski@midwest.edu', 'whateverbro')
        await LoginPage.mainPage()
        await LoginPage.buttonLogin()
        await LoginPage.loginInfo(PrivateCredentials.username, PrivateCredentials.password)
    })


})