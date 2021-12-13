const { ObjectId } = require('mongoose').Types;

module.exports = ({ Account, Entry }) => ({
  async create(body) {
    const { initialBalance, ...accountData } = body;

    const account = await Account.create(accountData);
    const entry = await Entry.create({
      value: initialBalance,
      kind: 'add',
      account: account._id,
      owner: account.owner,
      description: `Initial Balance for ${account.name}.`
    });

    return {
      id: account._id,
      name: account.name,
      value: entry.value,
    }
  },
  async findAll(query) {
    const { owner, ...restQuery } = query;
    return await Account.aggregate([
      {
        "$match": {
          "owner": new ObjectId(owner),
          ...restQuery,
        }
      },
      {
        '$lookup': {
          'from': 'entries',
          'localField': '_id',
          'foreignField': 'account',
          'as': 'entries'
        }
      }, {
        '$unwind': {
          'path': '$entries',
          'preserveNullAndEmptyArrays': false
        }
      }, {
        '$group': {
          '_id': '$_id',
          'id': {
            '$first': '$_id'
          },
          'kind': {
            '$first': '$kind'
          },
          'name': {
            '$first': 'name'
          },
          'value': {
            '$sum': '$entries.value'
          }
        }
      }
    ])
  }
});
