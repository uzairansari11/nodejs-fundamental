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

```
