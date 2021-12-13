const Router = require('express').Router;
const accountRouter = Router();

module.exports = ({ account }) => {
  accountRouter.get('/', async (req, res) => {
    const results = await account.findAll({
      ...req.query,
      owner: req.owner,
    });

    res.json({ results });
  })

  accountRouter.post('/', async (req, res) => {
    const newAccount = await account.create({
      owner: req.owner,
      ...req.body,
    });

    res.json(newAccount);
  })

  return accountRouter;
}
