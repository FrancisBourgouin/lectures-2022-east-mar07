// Server that serves data over the network

const net = require("net");
const clients = [];

const slapANameTagAndAddToTheList = (connection) => {
  const nameTag = Math.floor(Math.random() * 1000);
  connection.nameTag = nameTag;
  clients.push(connection);

  return nameTag;
};

const basicSetupForConnection = (connection) => {
  connection.setEncoding("utf-8");
};

const handleReceivedData = (data, nameTag) => {
  console.log(data);
  for (const client of clients) {
    if (client.nameTag !== nameTag) {
      client.write("🦜" + data);
    }
  }
};

const serverActions = (connection) => {
  const nameTag = slapANameTagAndAddToTheList(connection);

  console.log(`Somebody connected, ${clients.length} clients active`);

  basicSetupForConnection(connection);

  connection.on("data", (data) => handleReceivedData(data, nameTag));
};

const server = net.createServer(serverActions);
// const server = net.createServer((connection) => {
//   const nameTag = slapANameTagAndAddToTheList(connection);

//   console.log(`Somebody connected, ${clients.length} clients active`);

//   basicSetupForConnection(connection);

//   connection.on("data", (data) => handleReceivedData(data, nameTag));
// };);
// const server = net.createServer(connection => serverActions(connection));

server.listen(9001);
