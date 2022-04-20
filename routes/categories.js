var express = require('express');
var router = express.Router();

const productController = require('../components/products/controller');
const categoryController = require('../components/categories/controller');
const upload = require('../middle/upload');
const authentication = require('../middle/authentication');


/**
 * http://localhost:3000/danh-muc/them-moi
 * method: get
 * desc: hiển thị trang them mới sản phẩm
 */
router.get('/them-moi' ,async function (req, res, next) {
  // lấy danh sách danh mục
  const categories = await categoryController.getCategories();



  res.render('category_insert', { categories: categories });
});


/**
 * http://localhost:3000/danh-muc/:id/edit
 * method: get
 * desc: hiển thị chi tiết 1 sản phẩm
 */
router.get('/:id/edit',async function (req, res, next) {
  // lấy 1 sản phẩm từ database và hiển thị
  const { id } = req.params;
  //lấy thông tin chi tiết danh mục
  const categories = await categoryController.getCategoriesSelected(id);

  res.render('category_edit', { categories: categories });
});


/**
 * http://localhost:3000/san-pham/
 * method: post
 * desc: thêm mới 1 sản phẩm
  * middleware: trung gian (upload hình, bắt lỗi, kiểm tra login)
 */
 router.post('/', async function (req, res, next) {
  // thêm mới sp vào db
  let { body } = req;
  body = { ...body }
  await categoryController.insert(body);
  //chuyển lại trang sản phẩm
  res.redirect('/san-pham');
});


module.exports = router;
