import app from "./app.js";

const PORT = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);
