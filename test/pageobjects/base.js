import { browser } from '@wdio/globals'

export default class PageUrl {

    get rebels () {
        return $('//*[text()="Rebel"]')
    } 

    get rebelsHome () {
        return $('//img[@alt="rebels"]')
    }

    get hamburgerMenu () {
        return $('//*[@d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"]')
    }

    get homeBtn () {
        return $('//*[text()="Home"]');
    }

    get empire () {
        return $('//*[text()="Empire"]')
    }

    get empirePage () {
        return $('//img[@alt="empire"]')
    }

    get republic () {
        return $('//*[text()="Republic"]')
    }

    get republicPage () {
        return $('//img[@alt="republic"]')
    }

    get separatist () {
        return $('//*[text()="Separatist"]')
    }

    get separatistPage () {
        return $('//img[@alt="separatists"]')
    }

    get shadow () {
        return $('//*[text()="Shadow Collective"]')
    }

    get shadowPage () {
        return $('//span[@class="MuiButton-label"]')
    }

    get roller () {
        return $('//*[text()="Roller"]')
    }

    get rollerPage () {
        return $('//*[text()="Dice Roller"]')
    }

    

    async home () {
        await this.hamburgerMenu.click()
        await this.homeBtn.waitForClickable()
        await this.homeBtn.click()
    }

   
    mainPage () {
        return browser.url(`https://legionhq.thefifthtrooper.com`)
    }
}