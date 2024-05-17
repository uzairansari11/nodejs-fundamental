### use of multiple handler with next

```
app.get("/upper",

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

```
