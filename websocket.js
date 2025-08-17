// Instale a lib antes: npm install ws
const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Novo cliente conectado!");

  // Enviar mensagem de boas-vindas ao cliente
  socket.send("Bem-vindo! Conexão estabelecida.");

  // Receber mensagens do cliente
  socket.on("message", (msg) => {
    console.log("Mensagem recebida:", msg.toString());

    // Responder de volta
    socket.send(`Servidor recebeu: ${msg}`);
  });

  // Evento de desconexão
  socket.on("close", () => {
    console.log("Cliente desconectado");
  });
});

console.log("Servidor WebSocket rodando em ws://localhost:8080");
