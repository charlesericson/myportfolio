import { $ } from '@wdio/globals'
import PageUrl from './base.js';



class buildArmy extends PageUrl {

    get clearList () {
        return $('//*[text()="Clear List"]');
    }

    get commander () {
        return $('//img[@alt="commander"]');
    }  

    get hanSolo () {
        return $('//div[@title="Han Solo"]');
    }
    
    get operative () {
        return $('//img[@alt="operative"]'); 
    } 

    get lukeSkywalker () {
        return $('//div[@title="Luke Skywalker"]');
    }

    get corps () {
        return $('//img[@alt="corps"]');
    } 

    get fleetTroopers () {
        return $('//div[@title="Fleet Troopers"]');
    }

    get rebelTroopers () {
        return $('//div[@title="Rebel Troopers"]');
    }

    get rebelVeterans () {
        return $('//div[@title="Rebel Veterans"]');
    }

    get armyTitle () {
        return $('//input');
    }

    get saveList () {
        return $('//*[text()="Save List"]')
    }

    async rebelsPage () {
        await this.rebels.click();
        await expect(this.rebelsHome).toBeExisting;
    }

    async rebelArmy () {
        await this.clearList.click()
        await this.commander.click()
        await this.hanSolo.click()
        await this.operative.click()
        await this.lukeSkywalker.click()
        await this.corps.click()
        await this.fleetTroopers.click()
        await this.rebelTroopers.click()
        await this.rebelVeterans.click()
        await this.armyTitle.setValue('Rebel Army')
        await this.saveList.click()
    }


}

export default new buildArmy();
