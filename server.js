const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
const PORT = 5000;

let data = [{ name: "A.Tarık", surname: "Koç", email: "atarikkoc@gmail.com" }];
app.use(cors());
// Temel bir GET endpoint'i
app.get("/api", (req, res) => {
  res.json(data);
});

app.use(bodyParser.json());

app.post("/api", (req, res) => {
  const newData = req.body;
  data.push(newData);
  console.log("gelen veriler", newData);
  res.status(200).json({ message: "veri başarıyla kaydedildi" });
});

// API'nin çalıştığı portu dinleme
app.listen(PORT, () => {
  console.log(`Express API çalışıyor: http://localhost:${PORT}`);
});
