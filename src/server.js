// Importação da biblioteca express
const express = require("express");

// Criação do servidor
const app = express();

// Porta onde a aplicação vai estar disponível para ser acessada
const port = 3000;

// Definindo a porta que o servidor vai disponibilizar
app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}...`);
});

// Rota de acesso a aplicação
app.get('/usuarios', (req, res) => {
  res.send('Manoel, Karol, Ivson, Rickson');
});