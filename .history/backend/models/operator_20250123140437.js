const mongoose = require('mongoose');

const OperatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: "Not provided" },
  address: { type: String, default: "Not provided" },
  companyName: { type: String, required: true },
  companyType: { type: String, required: true },
  energyConsumed: { type: String, required: true },
  accessoriesUsed: { type: String, default: "Not provided" },
  joined: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Operator', OperatorSchema);
