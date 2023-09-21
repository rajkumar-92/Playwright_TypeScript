import {test as base} from '@playwright/test'
import {Assertion} from '../page-object-models/assertion'
import {HomePage} from '../page-object-models/homePage'

type HomePageFixtures = {
    homePage: HomePage
    assert: Assertion
}

export const test = base.extend<HomePageFixtures>({
    homePage: async ({page}, use) => {
        await use(new HomePage(page))
    },
    assert: async ({page}, use) => {
        await use(new Assertion(page))
    },
})