const net = require("net");

const clientOptions = {
  port: 9001,
};

const client = net.createConnection(clientOptions, () => {
  setInterval(() => {
    client.write("Yo yo yo \n");
  }, 500);
});
