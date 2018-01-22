const Person = require('../models/card');

function peopleIndex(req, res, next) {
  Person
    .find()
    .exec()
    .then(people => res.json(people))
    .catch(next);
}


function peopleShow(req, res, next) {
  Person
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then((card) => {
      if(!card) return res.notFound();
      res.json(card);
    })
    .catch(next);
}



module.exports = {
  index: peopleIndex,
  show: peopleShow
};
