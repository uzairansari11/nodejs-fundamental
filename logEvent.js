const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

/* ------------------------ */

const logEvent = async (message) => {
	try {
		const dateAndTime = format(new Date(), "yyyymmdd\thh:mm:ss");
		const logItem = `${dateAndTime} \t ${uuid()} \t ${message}\n`;
		if (!fs.existsSync(path.join(__dirname, "logs"))) {
			fs.mkdirSync(path.join(__dirname, "logs"));
		}
		await fsPromise.appendFile(
			path.join(__dirname, "logs", "eventLog.txt"),
			logItem
		);
	} catch (error) {
		console.log(error);
	}
};

module.exports = logEvent;
