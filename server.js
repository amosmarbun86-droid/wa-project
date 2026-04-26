const express = require("express");
const app = express();

app.use(express.json());

// tempat simpan pesan sementara
let messages = [];

// menerima pesan dari Fonnte (webhook)
app.post("/webhook", (req, res) => {
  const data = req.body;

  console.log("Pesan masuk:", data);

  messages.push({
    sender: data.sender,
    message: data.message
  });

  res.send("OK");
});

// kirim data ke web
app.get("/messages", (req, res) => {
  res.json(messages);
});

app.listen(3000, () => {
  console.log("Server jalan");
});
