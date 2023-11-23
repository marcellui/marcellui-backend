const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const projectsRoute = require("./routes/projects");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/projects", projectsRoute);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}!`));
