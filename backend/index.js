import express from "express";
import db from "./config/database.js";
import Productroutes from "./route/router.js";
import cors from "cors";

// express js gateaway
const app = express();

// defining port
const PORT = process.env.PORT || 5000;

// body parser
app.use(express.json());

// database connection
try {
	await db.authenticate();
	console.log(`database connected`);
} catch (error) {
	console.error(`connection error`, error);
}

// middleware
app.use(cors());

// connect to router
app.use("/products", Productroutes);

app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
});
