const Router = require('express').Router;
const entryRouter = Router();

module.exports = ({ entry }) => {
  entryRouter.post('/', async (req, res) => {
    const newEntry = await entry.create({
      owner: req.owner,
      ...req.body,
    });

    res.json(newEntry);
  })

  return entryRouter;
}
