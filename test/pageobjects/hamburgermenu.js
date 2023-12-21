import { $ } from '@wdio/globals'
import PageUrl from './base.js';



class hamburgerMenu extends PageUrl {



    get newsBtn () {
        return $('//*[contains(text(),"News")]')
    }

    get newsPage () {
        return $('//*[contains(text(),"Website Updates")]')
    }

    get cardsBtn () {
        return $('//*[text()="Cards"]')
    }

    get cardsPage () {
        return $('//*[contains(text(),"Unit Cards")]')
    }

    get settingsBtn () {
        return $('//*[text()="Settings"]')
    }

    get settingsPage () {
        return $('//*[text()="Theme"]')
    }

    get infoBtn () {
        return $('//*[text()="Info"]')
    }

    get infoPage () {
        return $('//*[text()="Want to Donate?"]')
    }

    get quickGuideBtn () {
        return $('//*[text()="Legion Quick Guide"]')
    } 

    get quickGuidePage () {
        return $('//img[@alt="Legion Quick Guide Logo"]')
    }

    get rebelsBtn () {
        return $('//*[text()="Rebels"]')
    }

    get separatistBtn () {
        return $('//*[text()="Separatists"]')
    }

    async menuHamburger () {
        await this.hamburgerMenu.click()
        await this.homeBtn.waitForClickable()
        await this.homeBtn.click()
        await this.hamburgerMenu.click()
        await this.newsBtn.waitForClickable()
        await this.newsBtn.click()
        await expect(this.newsPage).toBeExisting()
        await this.hamburgerMenu.click()
        await this.cardsBtn.waitForClickable()
        await this.cardsBtn.click()
        await expect(this.cardsPage).toBeExisting()
        await this.hamburgerMenu.click()
        await this.rebelsBtn.waitForClickable()
        await this.rebelsBtn.click()
        await expect(this.rebelsHome).toBeExisting()
        await this.hamburgerMenu.click()
        await this.empire.waitForClickable()
        await this.empire.click()
        await expect(this.empirePage).toBeExisting()
        await this.hamburgerMenu.click()
        await this.republic.waitForClickable()
        await this.republic.click()
        await expect(this.republicPage).toBeExisting()
        await this.hamburgerMenu.click()
        await this.separatistBtn.waitForClickable()
        await this.separatistBtn.click()
        await expect(this.separatistPage).toBeExisting()
        await this.hamburgerMenu.click()
        await this.shadow.waitForClickable()
        await this.shadow.click()
        await expect(this.shadowPage).toBeExisting()
        await this.hamburgerMenu.click()
        await this.roller.waitForClickable()
        await this.roller.click()
        await expect(this.rollerPage).toBeExisting()
        await this.hamburgerMenu.click()
        await this.settingsBtn.waitForClickable()
        await this.settingsBtn.click()
        await expect(this.settingsPage).toBeExisting()
        await this.hamburgerMenu.click()
        await this.infoBtn.waitForClickable()
        await this.infoBtn.click()
        await expect(this.infoPage).toBeExisting()
        await this.hamburgerMenu.click()
        await this.quickGuideBtn.waitForClickable()
        await this.quickGuideBtn.click()
        await expect(this.quickGuidePage).toBeExisting
    }

    mainPage () {
        return super.mainPage('');
    }



}

export default new hamburgerMenu();