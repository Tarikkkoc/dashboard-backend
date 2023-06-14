const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
// Temel bir GET endpoint'i
app.get("/api", (req, res) => {
  const jsonData = fs.readFileSync("./data/db.json", "utf-8");
  const data = JSON.parse(jsonData);
  res.json(data);
});

app.post("/api", (req, res) => {
  const newData = req.body;
  console.log("Gelen veriler", newData);

  //db.jsonu oku
  const jsonData = fs.readFileSync("./data/db.json", "utf8");
  const data = JSON.parse(jsonData);

  // Yeni veriyi ekle
  data.push(newData);

  // Verileri db.json dosyasına kaydet
  const updatedJsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync("./data/db.json", updatedJsonData, "utf8");

  console.log("veri kaydetme başarılı");
  res.status(200).json({ message: "veri başarıyla kaydedildi" });
});

// API'nin çalıştığı portu dinleme
app.listen(PORT, () => {
  console.log(`Express API çalışıyor: http://localhost:${PORT}`);
});
