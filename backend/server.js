const express = require('express');

const app = express();

app.get("/api", (req, res) => {
  res.json({"users": ["User1", "User2", "User4"]})
});

app.listen(3005, () => {
  console.log('Server Started!!!')
});