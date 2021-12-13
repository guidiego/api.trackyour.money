const Router = require('express').Router;
const budgetRouter = Router();

module.exports = ({ budget }) => {
  budgetRouter.post('/', async (req, res) => {
    const newBudget = await budget.create({
      owner: req.owner,
      ...req.body,
    });

    res.json(newBudget);
  })

  return budgetRouter;
}
