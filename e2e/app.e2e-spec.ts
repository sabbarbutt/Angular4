import { Angular4newPage } from './app.po';

describe('angular4new App', () => {
  let page: Angular4newPage;

  beforeEach(() => {
    page = new Angular4newPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
