import {Page} from '@playwright/test'
import {expect} from '@playwright/test'
import {BasePage} from './basePage'

export class Assertion extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async shouldContainPageTitle(page_title: string): Promise<void> {
        
        await expect.soft(this._page.title.name, 'The page title does not match').toContain(page_title)
    }

}