const fs = require("fs");

const readStream = fs.createReadStream("./docs/largeTextFile.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/streamGeneratedText.txt");

readStream.on("data", (chunk) => {
  console.log("------Chunk-------");
  //   console.log(chunk);
  writeStream.write("\n -------- New Chuck ----------- \n");
  writeStream.write(chunk);
});
