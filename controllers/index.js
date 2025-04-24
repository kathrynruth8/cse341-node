const awesomeFunction = (req, res, next) => {
  res.json('Brian Lingard');
};

const returnAnotherPerson = (req, res, next) => {
  res.json('Super awesome person');
};

module.exports = { awesomeFunction, returnAnotherPerson };
