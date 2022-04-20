const userService = require('./service');
const bcrypt = require('bcryptjs');
exports.login = async (username, password) => {
    const user = await userService.login(username);
    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword) return null;
    return {_id: user._id, username: user.username}
}
exports.register = async(username, password, confirm_password) => {
    if(password != confirm_password) return null;
    let user = await userService.login(username);
    if(user) return null;

    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    user = await userService.register(username, hash);
    return {_id: user._id}
}