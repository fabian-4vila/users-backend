const catchError =  require('../utils/catchError');
const User = require('../models/User')


const getAll = catchError(async(req,res) => {
    const users = await User.findAll();
    return res.json(users);
});
const create = catchError(async(req,res) => {
    const { email, password, first_name, last_name, birthday } = req.body
    const user = await User.create({
        email, password, first_name, last_name, birthday
    });
    return res.status(201).json(user);
});
const getUser = catchError(async(req,res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
})
const remove = catchError(async(req,res) => {
    const { id } = req.params;
    await User.destroy({where: { id : id }});
    return res.sendStatus(204);
});
const updateUser = catchError(async(req,res) => {
    const { id } = req.params;
    const { email, password, first_name, last_name, birthday } = req.body;
    const user = await User.update(
        { email, password, first_name, last_name, birthday },
        {where: { id:id }, returning: true}
    );
    return res.json(user[1][0]);
})

module.exports={
    getAll,
    create,
    getUser,
    remove,
    updateUser
}

