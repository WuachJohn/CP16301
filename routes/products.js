var express = require('express');
var router = express.Router();

const productController = require('../components/products/controller');
const categoryController = require('../components/categories/controller');
const upload = require('../middle/upload');
const authentication = require('../middle/authentication');
/**
 * http://localhost:3000/san-pham/
 * method: get
 * desc: hiển thị danh sách sản phẩm
 */
router.get('/', [authentication.checkLogin] ,async function (req, res, next) {
  // lấy danh sách sản phẩm từ database và hiển thị
  const data = await productController.getProducts();



  res.render('products', { products: data });
});


/**
 * http://localhost:3000/san-pham/
 * method: post
 * desc: thêm mới 1 sản phẩm
  * middleware: trung gian (upload hình, bắt lỗi, kiểm tra login)
 */
router.post('/', [upload.single('image'), authentication.checkLogin], async function (req, res, next) {
  // thêm mới sp vào db
  let { body, file } = req;
  let image = '';
  if (file) {
    image = `http://192.168.1.94:3000/images/${file.filename}`
  }
  body = { ...body, image }
  await productController.insert(body);
  //chuyển lại trang sản phẩm
  res.redirect('/san-pham');
});

/**
 * http://localhost:3000/san-pham/them-moi
 * method: get
 * desc: hiển thị trang them mới sản phẩm
 */
router.get('/them-moi', [authentication.checkLogin] ,async function (req, res, next) {
  // lấy danh sách danh mục
  const categories = await categoryController.getCategories();



  res.render('product_insert', { categories: categories });
});


/**
 * http://localhost:3000/san-pham/:id/edit
 * method: get
 * desc: hiển thị chi tiết 1 sản phẩm
 */
router.get('/:id/edit', [authentication.checkLogin],async function (req, res, next) {
  // lấy 1 sản phẩm từ database và hiển thị
  const { id } = req.params;
  //lấy thông tin chi tiết 1 sản phẩm
  const product = await productController.getProductById(id);
  //lấy thông tin chi tiết danh mục
  const categories = await categoryController.getCategoriesSelected(product.category_id._id);

  res.render('product_edit', { product: product, categories: categories });
});



/**
 * http://localhost:3000/san-pham/:id/edit
 * method: post
 * desc: hiển thị chi tiết 1 sản phẩm
 */
router.post('/:id/edit', [upload.single('image'), authentication.checkLogin], async function (req, res, next) {
  // update 1 sản phẩm vào db
  let { body, file, params } = req;
  delete body.image;
  if (file) {
    let image = `http://192.168.1.94:3000/images/${file.filename}`
    body = { ...body, image }
  }
  await productController.update(params.id, body);
  res.redirect('/san-pham');
});



/**
 * http://localhost:3000/san-pham/:id/delete
 * method: delete
 * desc: xóa 1 sản phẩm
 */
router.delete('/:id/delete', [authentication.checkLogin],async function (req, res, next) {
  // xóa 1 sản phẩm 
  const {id} = req.params;
  await productController.delete(id);
  //trả về kết quả xóa đc
  res.json({result: true});
});


/**
 * http://localhost:3000/san-pham/thong-ke
 * method: get
 * desc: thống kê sp
 */
router.get('/thong-ke', function (req, res, next) {
  // thống kê sản phẩm 



  res.render('products', {});
});

module.exports = router;
