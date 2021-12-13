
module.exports = ({ Budget }) => ({
  async create(body) {
    const budget = await Budget.create(body);

    return {
      id: budget._id,
      name: budget.name,
      total: budget.total,
      recurrent: budget.recurrent,
    }
  }
})
