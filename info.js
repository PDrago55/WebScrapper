//brought in our dependencies

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("post.csv");

//write headers

writeStream.write(`para, link, date \n`);

request(
  "https://us.cnn.com/2020/03/27/uk/uk-boris-johnson-coronavirus-gbr-intl/index.html",
  (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      $(".l-container").each((i, el) => {
        const para = $(el)
          .find("p")
          .text()
          .replace(/\s\s+/g, "");
        // console.log(para);
        const link = $(el)
          .find("a")
          .attr("href");
        // console.log(link);
        const date = $(el)
          .find(".update-time")
          .text()
          .replace(/,/, " ");
        //write CSV
        writeStream.write(`${para}, ${link}, ${date} \n`);
      });
      console.log("scrapping done");
    }
  }
);

// class="zn-body__paragraph speakable">

// {/* //class="el-editorial-source"> */}
// ("zn-body__paragraph speakable");

// ("el__leafmedia el__leafmedia--sourced-paragraph");
