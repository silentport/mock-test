const express = require("express");
const path = require("path");
const mock = require("dynamic-mock-express");
const app = express();

app.use(
  mock({
    mockDir: path.resolve(__dirname, "mock")
  })
);
app.listen(3000, () => {
    console.log(`server is started`)
})