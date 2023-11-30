const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const csvToJson = require("convert-csv-to-json");

const app = express();
const PORT = 3003;

app.use(bodyParser.text());

app.post("/jsonFromBody", (req, res) => {
  const filePath = "tempFile.csv";

  try {
    fs.writeFileSync(filePath, req.body);

    const dataJson = csvToJson.fieldDelimiter(";").getJsonFromCsv(filePath);
    fs.unlinkSync(filePath);

    res.json(dataJson);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.get("/jsonFromFile", (req, res) => {
  try {
    const filePath = "data/centros.csv";
    const dataJson = csvToJson.fieldDelimiter(";").getJsonFromCsv(filePath);
    res.json(dataJson);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
