// npm install express
const express = require("express");
const app = express();

app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Envia uma mensagem inicial
  res.write("data: Conexão SSE estabelecida!\n\n");

  // Envia mensagens a cada 2 segundos
  const interval = setInterval(() => {
    const msg = `Atualização: ${new Date().toLocaleTimeString()}`;
    res.write(`data: ${msg}\n\n`);
  }, 2000);

  // Quando o cliente fechar a conexão
  req.on("close", () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(3000, () => {
  console.log("Servidor SSE rodando em http://localhost:3000/events");
});
