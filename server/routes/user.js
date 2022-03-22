const router = require('express').Router();
const {
    getAllusers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFollower,
    removeFollower,

} = require('../controllers/user-controllers');

router.route('/').get(getAllusers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:id/follow/:followerId').post(addFollower).delete(removeFollower);


module.exports = router;