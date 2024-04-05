import mongoose from "mongoose";
import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;
const DBConectionString =
  "mongodb+srv://eratiani:XZgF3RhHjEsGu2yz@cluster1.curl0tn.mongodb.net/";
mongoose.connect(DBConectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
const SearchRequest = mongoose.model("SearchRequest", {
  query: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
app.use(express.json());
app.use(cors());
app.post("/search", async (req, res) => {
  const { query } = req.body;
  console.log(query);
  try {
    const newSearchRequest = new SearchRequest({ query });
    await newSearchRequest.save();

    res.status(201).json({ message: "Search request saved successfully" });
  } catch (error) {
    console.error("Error saving search request:", error);
    res.status(500).json({ error: "Failed to save search request" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
