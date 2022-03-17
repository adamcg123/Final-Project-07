const res = require('express/lib/response');
const { User, Post } = require('../models');

const userController = {
    getAllusers(req, res) {
        User.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400)
            });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            // .populate({path: 'post', select: '-__v' })
            // .populate({path: 'followers' select: '-__v'})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err)
                res.sendStatus(400);
            });
    },

    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err)
                res.sendStatus(400)
            })
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err))
    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },
    addFollower({ params }, res) {
        User.findOneAndUpdate({ _id: params.id }, { $push: { folower: params.id } }, { new: true })
            // .populate({ path: 'follower', select: ('-__v') })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    removeFollower({ params }, res) {
        User.findOneAndUpdate({ _id: params.id }, { $pull: { followers: params.followerId } }, { runValidators: true })
            // .populate({ path: 'followers', select: '-__v'})
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    // remove follower
    // follow someone

    // lines 18,19,38,48,54,55,67,68 will need to be updated to work with models
}


