const express = require('express');
const router = express.Router();
const Operator = require('../models/Operator');

// Fetch details
router.get('/', async (req, res) => {
  try {
    const operators = await Operator.find();
    res.json(operators);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add or update details
router.post('/', async (req, res) => {
  const { id, ...details } = req.body;
  try {
    if (id) {
      const updated = await Operator.findByIdAndUpdate(id, details, { new: true });
      return res.json(updated);
    } else {
      const newOperator = new Operator(details);
      await newOperator.save();
      res.status(201).json(newOperator);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
