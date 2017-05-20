import { NeatjsWebPage } from './app.po';

describe('neatjs-web App', () => {
  let page: NeatjsWebPage;

  beforeEach(() => {
    page = new NeatjsWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
