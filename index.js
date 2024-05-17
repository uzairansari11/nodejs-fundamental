const logEvent = require("./logEvent");
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("log", (mes) => logEvent(mes));

setTimeout(() => {
	myEmitter.emit("log", "hello world");
}, 2000);
