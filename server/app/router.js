import Router from "express";

const router = new Router();

// GET: /api
router.get("/", (_, res) => {
  res.send("Hello from API!");
});
// TODO: Add routes here (maybe 🤔 start with a GET test route)

export default router;
