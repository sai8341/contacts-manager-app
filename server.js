const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDB = require("./config/dbConnection.js");
require("dotenv").config();

connectDB();

const app = express();

PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
