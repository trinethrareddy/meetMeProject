import { MeetMePage } from './app.po';

describe('meet-me App', () => {
  let page: MeetMePage;

  beforeEach(() => {
    page = new MeetMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
