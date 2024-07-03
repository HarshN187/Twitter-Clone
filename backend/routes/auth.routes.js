import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({
    data: "you hit the signup endpoint",
  });
});

router.post("/login", (req,  res) => {
  res.json({
    data: "you hit the login endpoint",
  });
});

router.post("/logout", (req, res) => {
  res.json({
    data: "you hit the logout endpoint",
  });
});

export default router;
