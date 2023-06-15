const { expect } = require("chai");
const fs = require("fs");

describe("within index.html", () => {
  let html;

  before(() => {
    html = fs.readFileSync("./index.html", "utf-8");
  });

  it("contains a <body> tag", () => {
    expect(html).to.include("<body>");
  });

  it("contains a </body> tag", () => {
    expect(html).to.include("</body>");
  });

  it("contains an <h1> tag", () => {
    expect(html).to.include("<h1>");
  });

  it("contains a <p> tag", () => {
    expect(html).to.include("<p>");
  });

  it("within the <p>, it contains a <strong> tag", () => {
    const pTag = html.match(/<p>(.*?)<\/p>/s)[1];
    expect(pTag).to.include("<strong>");
  });

  it("within the <p>, it contains an <em> tag", () => {
    const pTag = html.match(/<p>(.*?)<\/p>/s)[1];
    expect(pTag).to.include("<em>");
  });

  it("within the <body>, it contains a <table> tag", () => {
    expect(html).to.include("<table>");
  });
});
