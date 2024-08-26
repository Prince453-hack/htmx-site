import express from "express";
import articles from "../data/articles.js";
import axios from "axios";

const router = express.Router();


router.get("/", (req, res) => {
  res.render("index", { title: "Listing", articles });
});

router.get("/articles/:id", (req, res) => {
  const article = articles.find((a) => a.id === parseInt(req.params.id));
  res.render("article", { title: article.name, article: article });
});

router.post("/articles", (req, res) => {
  const { name, body } = req.body;

  const article = {
    id: Math.floor(Math.random() * 1000) + 1,
    name,
    body,
  };

  articles.push(article);

  setTimeout(() => {
    res.render("partials/list", { articles });
  }, 3000);
});

export default router;
