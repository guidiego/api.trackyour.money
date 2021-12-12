const Router = require('express').Router;
const accountRouter = Router();

module.exports = ({ accountService }) => {
  accountRouter.get('/', (req, res) => {
    console.log(accountService);
    res.json({ ok: true });
  })

  return accountRouter;
}
