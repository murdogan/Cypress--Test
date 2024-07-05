import { Homepage } from "../../pageObjectModel/homepage";
import homepageSecond from "../../pageObjectModel/homepageSecond";

const homepagePom = new Homepage();

import HomepageSecond from "../../pageObjectModel/homepageSecond";

describe("Page Object model Kullanimi", () => {
  it("Page object model kullanim ornekleri", () => {
    homepagePom.navigate();
    homepagePom.pricingBtn();
  });
});

describe.only("Page object model ikinci kullanım", () => {
  it("Page object model kullanim ornekleri", () => {
    homepageSecond.navigate();
    homepageSecond.pricingBtn.click();
  });
});
