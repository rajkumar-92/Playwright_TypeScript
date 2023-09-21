import {Page} from '@playwright/test'
import {request, expect} from '@playwright/test'
import fs from 'fs'
import {readFile} from 'fs/promises'

export class BasePage {

    protected _page: Page

    constructor(page: Page) {
        this._page = page
    }

    
}