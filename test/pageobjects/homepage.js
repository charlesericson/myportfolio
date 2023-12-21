import PageUrl from './base.js';
import LoginPage from './login.js'


class legionHQ extends PageUrl {



    async testHome () {
        await this.rebels.click()
        await expect(this.rebelsHome).toBeExisting()
        await this.home()
        await expect(this.empirePage).toBeExisting()
        await this.home()
        await this.republic.click()
        await expect(this.republicPage).toBeExisting()
        await this.home()
        await this.separatist.click()
        await expect(this.separatistPage).toBeExisting()
        await this.home()
        await this.shadow.click()
        await expect(this.shadowPage).toBeExisting()
        await this.home()
        await LoginPage.buttonLogin()
         
    }

    mainPage () {
        return super.mainPage('');
    }


}

export default new legionHQ();