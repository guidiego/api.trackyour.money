
module.exports = ({ Entry }) => ({
  async create(body) {
    const entry = await Entry.create(body);

    return {
      id: entry._id,
      description: entry.description,
      kind: entry.kind,
      budget: entry.budget,
      account: entry.account,
      value: entry.value,
    }
  }
})
