const express = require('express');

const elementList = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Berylium'
];

const router = express.Router();

router.get('/', (req, res) => {
  res.send(elementList);
});

router.post('/', (req, res) => {
  elementList.push(req.body.name);
  res.sendStatus(200);
});

module.exports = router;
