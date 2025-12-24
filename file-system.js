const fs = require("fs");

// Create welcome.txt
fs.writeFileSync("welcome.txt", "Hello Node");

// Read from hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
