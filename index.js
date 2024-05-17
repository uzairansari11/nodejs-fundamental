const http = require("http");
const express = require("express");
const fs = require("fs");
const path = require("path");
const fsPromise = require("fs").promises;
const app = express();
const PORT = process.env.PORT || 3500;

app.get("/", async (req, res) => {
	const filePath = path.join(__dirname, "views", "index.html");
	res.sendFile(filePath);
});

app.get("/old-page", (req, res) => {
	res.redirect(301, "/");
});

/* route handler */

app.get(
	"/upper",
	(req, res, next) => {
		console.log("hello upper case");
		next();
	},
	(req, res, next) => {
		console.log("hello lower case");
		res.send("hello upper case");
	}
);
const one = (req, res, next) => {
	console.log("one");
	next();
};
const two = (req, res, next) => {
	console.log("two");
	next();
};
const three = (req, res, next) => {
	console.log("three");

	res.send("All three function running");
};

app.get("/examples", [one, two, three]);
app.get("/*", (req, res) => {
	const filePath = path.join(__dirname, "views", "404.html");
	res.status(404).sendFile(filePath);
});
app.listen(PORT, () => {
	console.log("listening on port", PORT);
});
