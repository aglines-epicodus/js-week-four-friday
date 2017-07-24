import { JsWeekFourFridayPage } from './app.po';

describe('js-week-four-friday App', () => {
  let page: JsWeekFourFridayPage;

  beforeEach(() => {
    page = new JsWeekFourFridayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
