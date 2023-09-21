import { Page, expect } from '@playwright/test'
import { BasePage } from './basePage'
import { Assertion } from './assertion'

const webPopUp = '#Ebene_1';
const closePopUp = '[class="cmButtons"] #cmCloseBanner';
const pageTitle = '/TUI fly vliegtickets - boek goedkope vliegtickets online | TUI/'
const LanguageLink = 'div[class="cl-selector"] span[class*="cl-selector__lang"]';
const radioOneWayTrip = 'div #radio-oneway > div  svg';
const Dropdown = "select[name='langCode']";
const LngsubmitBtn = 'button[type="submit"]';
const departPort = 'tui-flight-search-bar #searchField-airport-outbound';
const destinPort = 'tui-flight-search-bar #searchField-airport-inbound';
function destinationPort(destPortName: string) {
  destPortName = 'id='.concat(destPortName);
  console.log(destPortName);
  return 'tui-flight-search-bar ul[class="list__19a00"]:nth-child(1)>li>a['.concat(destPortName).concat(']');
}

const EnglishNBY = 'Infant not born yet'
const DucthNBY = 'Nog niet geboren baby'

/* function checBox_InfantNotBornYet(elementText: string) {
  // destPortName = 'id='.concat(destPortName);
  // console.log(destPortName);

  contextSetup.testAppLanguage
  return 'div[aria-label='.concat(elementText)'] span[class='inputs__box']'
  return 'tui-flight-search-bar ul[class="list__19a00"]:nth-child(1)>li>a['.concat(destPortName).concat(']');
} */

const outboundTravelDate = ('div #calendarItems-outbound > div:nth-child(28)');
const calendarOBTB = 'tui-flight-search-bar #searchField-date-outbound';
const calendarOBMY = 'tui-flight-search-bar #selectBox';
const calendarRTB = 'tui-flight-search-bar #searchField-date-inbound';
const clickOnTravelers = 'tui-flight-search-bar #searchField-pax';
const adultsDD = 'tui-flight-search-bar #travelPartySelectAdults';
const childDD = 'tui-flight-search-bar #travelPartySelectChildren';
const SearchBtn = 'tui-flight-search-bar #searchButton';

//const selectFlight = "button[aria-label='button']";



// List<ElementHandle> searchCardsInbound = page
//                 .querySelectorAll("(//div[@class='FlightCardsList__flightCardsList'])[2]//button");
//         searchCardsInbound.get(0).click();

export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page)
  }
  assert = new Assertion(this._page);

  async closeWebPopUp(): Promise<void> {
    var length = await this._page.locator(webPopUp).count();
    if (length > 0) {
      await this._page.click(closePopUp)
    }
  }

  async verifyTitle(): Promise<void> {
   // await new Promise(f => setTimeout(f, 10000));
    this.assert.shouldContainPageTitle(pageTitle);
  }

  async selectLanguage(language: string): Promise<void> {
    await this._page.locator(LanguageLink).click();
    await this._page.locator(Dropdown).selectOption({ label: language });
    await this._page.locator(LngsubmitBtn).click();
  }

  async selectTripeType(): Promise<void> {
    await this._page.locator(radioOneWayTrip).click();
  }

  async selectDepartureAirPort(airportName: string): Promise<void> {
    await this._page.waitForSelector(departPort, {state:'visible', timeout:400000})
    await this._page.locator(departPort).click();
    airportName = `#${airportName}`;
    await this._page.waitForSelector(airportName, {state:'visible', timeout:400000})
    await this._page.locator(airportName).click();
  }
  async selectDestinationPort(portName1: string): Promise<void> {
    await this._page.waitForSelector(destinPort, {state:'visible', timeout:400000})
    await this._page.locator(destinPort).click();
    const portName = destinationPort(portName1);
    await this._page.waitForSelector(portName, {state:'visible', timeout:400000})
    await this._page.locator(portName).click();
  }

  
  async selectAvailableNextDate(): Promise<void> {

    await this._page.locator(calendarOBTB).click();
    
    // await this._page.waitForSelector(calendarOBTB, {state:'visible', timeout:400000})
    await this._page.locator(outboundTravelDate).click();
    
  //   var locator = await this._page.$('tui-flight-search-bar #calendarItems-inbound')
  //   var elements = await this._page.$$('div[class*="entry"]')
  //   for (var i = 0; i < elements.length; i++) {
  //     var actualDate = await elements[i].textContent();
  //     if (actualDate === '16') {
  //       var attribute = await elements[i].getAttribute('class');
  //       if (null != attribute) {
  //         if (attribute.includes('available')) {
  //           await elements[i].click();
  //           break;
  //         }
  //       }
  //       else {
  //         for (++i; i < elements.length; i++) {

  //           attribute = await elements[i].getAttribute('class');
  //           if (null != attribute) {
  //             if (attribute.includes('available')) {
  //               await elements[i].click();
  //               break;
  //             }
  //           }
  //         }
  //       }

  //     }
  //   }
  }
  async clickOnSearchButton(): Promise<void> {
    await this._page.locator(SearchBtn).click();
  }
  
  async clickOnButtonSelectFlight(): Promise<void> {
    const selectAvailableFlight ='div .FlightInformation__selectionStatus';
    await this._page.waitForSelector(selectAvailableFlight, {state:'visible', timeout:400000})
    const elements = await this._page.locator(selectAvailableFlight);
       await elements.nth(0).click();
    
  }

  async clickOnContinueButton(): Promise<void> {
    const continueButton = "(//div[@id='flightsummarypanel__component'])[1]//button";
    await this._page.waitForSelector(continueButton, {state:'visible', timeout:400000})
    await this._page.locator(continueButton).click();
    
  }

  async selectAdultHandLuggage(): Promise<void> {
    const selectLuggage ='div .passengersList__d9407e > div .card__8c6db6';
    await this._page.waitForSelector(selectLuggage, {state:'visible', timeout:400000})
    const elementBag =  await this._page.locator(selectLuggage);
    elementBag.nth(2).click();
  }
 

}