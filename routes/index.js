var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const authentication = require('../middle/authentication');

const userController = require('../components/users/controller');

/**
 * http://localhost:3000/dang-nhap
 * method: get
 * desc: hiển thị trang đăng nhập
 */
router.get('/dang-nhap', function (req, res, next) {
  res.render('login');
});
/**
 * http://localhost:3000/dang-nhap
 * method: post
 * desc: tiến hành đăng nhập
 */
router.post('/dang-nhap', [authentication.checkLogin],async function (req, res, next) {
  const { username, password } = req.body;
  // tiến hành đăng nhập
  const user = await userController.login(username, password);
  if (user) {
    const token = jwt.sign({id: user._id, username: user.username}, 'mykey');
    req.session.token = token;
    // nếu thành công thì chuyển qua sản phẩm
    res.redirect('/san-pham');
  } else {
    // nếu không thành công
    res.redirect('/dang-nhap');
  }
});
/**
 * http://localhost:3000/dang-xuat
 * method: get
 * desc: tiến hành đăng xuất, thành công chuyển qua đăng nhập
 */
router.get('/dang-xuat', [authentication.checkLogin] ,function (req, res, next) {
  req.session.destroy(function(err){
    // nếu thành công thì chuyển đăng nhập
  res.redirect('/dang-nhap');
  })
});

module.exports = router;
