const userModel = require('./model')

exports.login = async(username) => {
    // const user = data.filter(item => item.username == username)[0]
    // return user;
    const user = await userModel.findOne({ username: username },
        '_id username password');
    return user;
}
exports.register = async(username, password) => {
    const user = new userModel({ username, password });
    return await user.save();
}

var data = [
    { _id: 1, username: 'admin@gmail.com', password: '123', name: "Admin" },
    { _id: 2, username: 'thien@gmail.com', password: '123', name: "Thien" },
    { _id: 3, username: 'John@gmail.com', password: '123', name: "John" },
    { _id: 4, username: 'Henry@gmail.com', password: '123', name: "Henry" },
]