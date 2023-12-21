import { $ } from '@wdio/globals';
import PageUrl from './base.js';


class LoginPage extends PageUrl {
    
    get loginBtn () {
        return $('//span[contains(text(),"Login")]')
    }

    get welcomeMessage () {
        return $('//h1[text()="Welcome"]')
    }

    get loginEmail () {
        return $('#username')
    }

    get loginPassword () {
        return $('#password')
    }

    get continueBtn () {
        return $('//button[@data-action-button-primary="true"]')
    }

    get wrongInfo () {
        return $('//span[@id="error-element-password"]')
    }
    
    async buttonLogin () {
        await this.loginBtn.click();
        await expect(this.welcomeMessage).toBeExisting;
    }


    async loginInfo (email, password) {
        await this.loginEmail.setValue(email);
        await this.loginPassword.setValue(password);
        await this.continueBtn.click();
        await expect(this.legionName).toBeExisting;
    }

    async errorMessage (email, password) {
        await this.loginEmail.setValue(email);
        await this.loginPassword.setValue(password);
        await this.continueBtn.click();
        await expect(this.wrongInfo).toBeExisting;
    }




    mainPage () {
        return super.mainPage('');
    }

}


export default new LoginPage();