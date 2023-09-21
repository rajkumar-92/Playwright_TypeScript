import {test} from '../fixtures/homePageFixture';

test('has title', async ({ page ,homePage, baseURL}) => {

    
    await page.goto(baseURL+'/flight/', {waitUntil: 'networkidle'});
    await homePage.closeWebPopUp();
   //  await expect(page).toHaveTitle(/Some-Title/);
 //   await homePage.verifyTitle();
   
    await homePage.selectLanguage('English');
    await homePage.selectTripeType();
    await homePage.selectDepartureAirPort('all_nearby_airports');
    await homePage.selectDestinationPort('AGA');
    
    await homePage.selectAvailableNextDate();
    await homePage.clickOnSearchButton();
    await homePage.clickOnButtonSelectFlight();
    await homePage.clickOnContinueButton();
    await homePage.selectAdultHandLuggage();

  })