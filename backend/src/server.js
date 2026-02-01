import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js";

const app = express();

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------- API ROUTES ----------------
// Note: API routes must come BEFORE the catch-all route
app.get("/api", (req, res) => {
  res.json({ msg: "API working" });
});

app.get("/api/login", (req, res) => {
  res.json({ msg: "Login API working" });
});

// ---------------- FRONTEND (React) ----------------
if (ENV.NODE_ENV === "production") {
  // 1. Serve React static files (js, css, images)
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  // 2. Catch-all route to serve index.html for React Router
  // FIX: Using a raw RegExp object /^(.*)$/ avoids string parsing errors in Express 5
  app.get(/^(.*)$/, (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}

// ---------------- SERVER ----------------
app.listen(ENV.PORT, () => {
  console.log("Server running on port", ENV.PORT);
});