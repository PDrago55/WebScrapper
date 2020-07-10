//brought in our dependencies

const request = require("request");
const cheerio = require("cheerio");

request(
  "https://us.cnn.com/2020/03/27/uk/uk-boris-johnson-coronavirus-gbr-intl/index.html",
  (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);

      const siteHeading = $(".metadata");
      console.log("X", x);
      const output = siteHeading.find("div").text();
      const newOutput = siteHeading
        .find("div")
        .next()
        .text();
      const newNewOutput = siteHeading
        .find("div")
        .parent()
        .text();
      //   console.log(newNewOutput);
      $(".metadata a").each((i, el) => {
        const item = $(el).text();
        const link = $(el).attr("href");
      });
    }
  }
);
