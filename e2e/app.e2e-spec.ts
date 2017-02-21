import { Ng2PrismPage } from './app.po';

describe('ng2-prism App', function() {
  let page: Ng2PrismPage;

  beforeEach(() => {
    page = new Ng2PrismPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
