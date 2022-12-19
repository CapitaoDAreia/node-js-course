let http = require("http");

http
  .createServer((req, res) => {
    res.end(`
        <h1>Conexão bem sucedida!</h1> </br>
        <h2>Bem-vindo(a) ao meu server</h2>    
        `);
  })
  .listen(8080);

let counter = 0;

function running() {
  console.log("Server is running on port 8080...");
  console.log("Running times: ", counter);
  counter++;
}

setInterval(() => {
  running();
}, 5000);
