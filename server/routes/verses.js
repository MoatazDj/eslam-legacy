const router = require ('express').Router()

const auth = require('../middlewares/auth');
const handler = require ('../handlers')

router.post('/', handler.insertFavorite);

router.get('/:state', handler.getVerses);

module.exports = router;