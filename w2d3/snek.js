const net = require("net");
const IP = "165.227.47.243";
const PORT = 50541;

//establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("data", (data) => {
    console.log(`Server data: ${data}`);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNEKINATOR");

    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 100);
  });

  conn.on("end", () => {
    console.log("Disconnected");
  });

  conn.setEncoding("utf8");
  return conn;
};

let connection;
let rotationActive = false;
const rotate = () => {
  connection.write("Say: POTATO 4 LYFE");
  setTimeout(() => {
    connection.write("Move: up");
  }, 300);
  setTimeout(() => {
    connection.write("Move: up");
  }, 600);
  setTimeout(() => {
    connection.write("Move: right");
  }, 900);
  setTimeout(() => {
    connection.write("Move: right");
  }, 1200);
  setTimeout(() => {
    connection.write("Move: down");
  }, 1500);
  setTimeout(() => {
    connection.write("Move: down");
  }, 1800);
  setTimeout(() => {
    connection.write("Move: left");
  }, 2100);
  setTimeout(() => {
    connection.write("Move: left");
  }, 2400);
};
const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "q") {
    connection.write("Say: NO ONE IS SAFE");
  }
  if (key === "e") {
    connection.write("Say: POTATO 4 LYFE");
  }
  if (key === "f") {
    let interval = undefined;

    if (!rotationActive) {
      rotate();
      interval = setInterval(rotate, 2400);
    } else {
      clearInterval(interval);
    }
    rotationActive = !rotationActive;
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput(connect());
