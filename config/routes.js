const router = require('express').Router();
const people  = require('../controllers/people');


router.route('/people')
  .get(people.index)
  .post(people.create);

router.route('/people/:id')
  .get(people.show)
  .put(people.update)
  .delete(people.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
