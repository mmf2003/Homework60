import express from "express";

import rootRoutes from "./routes/rootRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import articlesRoutes from "./routes/articlesRoutes.js";

const app = express();

app.use(express.json());

app.use("/", rootRoutes);
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

// Handle unknown routes.
app.use((req, res) => {
    res.status(404).type("text").send("Route not found");
});

// Handle unexpected errors.
app.use((err, req, res, next) => {
    console.error("Server error:", err);
    res.status(500).type("text").send("Internal Server Error");
});

export default app;
