const fs = require("fs");

// Read
fs.readFile("./docs/blog.txt", (error, data) => {
  if (error) console.log("error", error);

  console.log("Data", data.toString());
});

// Write
fs.writeFile("./docs/generatedText.txt", "Hello Luke Badawy", () => {
  console.log("File was generated");
});

// Directories
if (!fs.existsSync("./docs/generatedFolder")) {
  fs.mkdir("./docs/generatedFolder", (error) => {
    if (error) console.log("error", error);
    console.log("folder generated");
  });
} else {
  console.log("folder already exists");
  fs.rmdir("./docs/generatedFolder", (error) => {
    if (error) console.log("error", error);
    console.log("folder removed");
  });
}

// Deleting files
if (fs.existsSync("./docs/testDeleteFile.txt")) {
  fs.unlink("./docs/testDeleteFile.txt", (error) => {
    if (error) console.log("error");

    console.log("file deleted");
  });
}
