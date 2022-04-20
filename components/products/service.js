//Tầng giao tiếp db
const productModel = require('./model');
// lấy danh sách sản phẩm
exports.getProducts = async () => {
    // return data;
    return await productModel.find().populate('category_id');
}
exports.getProductById = async (id) => {
    // const product = data.filter(item => item._id == id)[0];
    // return product;
    return productModel.findById(id).populate('category_id');
}
exports.insert = async (product) => {
  // data.push(product);
  const p = new productModel(product);
  await p.save();
}
exports.delete = async (id) => {
  // data.filter(item => item._id != id);
  await productModel.findByIdAndDelete(id);
}
exports.update = async (id, product) => {
  // data = data.map(item => {
  //   if(item._id == id){
  //     item = {...item, ...product}
  //   }
  //   return item;
  // })
  await productModel.findByIdAndUpdate(id, product);
}
var data = [{
  "_id": 1,
  "name": "Appetiser - Bought",
  "price": 11,
  "quantity": 7,
  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",

  "category_id": {
      "_id": 1,
      "name": "Soup Campbells Mexicali Tortilla",
      "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
  },
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "released": "2022-02-24"
}, {
  "_id": 2,
  "name": "Soup - Campbells, Cream Of",
  "price": 60,
  "quantity": 9,
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "category_id": {
      "_id": 2,
      "name": "Flour - Masa De Harina Mexican",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
  },
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "released": "2021-06-04"
}, {
  "_id": 3,
  "name": "Puree - Kiwi",
  "price": 98,
  "quantity": 48,
  "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "category_id": {
      "_id": 3,
      "name": "Ecolab Digiclean Mild Fm",
      "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
  },
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "released": "2022-02-19"
}, {
  "_id": 4,
  "name": "Spice - Montreal Steak Spice",
  "price": 10,
  "quantity": 51,
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "category_id": {
      "_id": 4,
      "name": "Pork - Tenderloin, Fresh",
      "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
  },
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "released": "2022-01-23"
}, {
  "_id": 5,
  "name": "Maple Syrup",
  "price": 74,
  "quantity": 100,
  "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "category_id": {
      "_id": 5,
      "name": "Cheese - La Sauvagine",
      "description": "Fusce consequat. Nulla nisl. Nunc nisl."
  },
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "released": "2021-06-12"
}, {
"_id": 6,
  "name": "Wine - Red, Antinori Santa",
  "price": 34,
  "quantity": 4,
  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "category_id": {
      "_id": 6,
      "name": "Shrimp - 150 - 250",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
  },
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "released": "2021-08-19"
}, {
  "_id": 7,
  "name": "Soup - Campbells Pasta Fagioli",
  "price": 18,
  "quantity": 65,
  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "category_id": {
      "_id": 7,
      "name": "Yucca",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
  },
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "released": "2022-03-07"
}, {
  "_id": 8,
  "name": "Bread - Multigrain Oval",
  "price": 82,
  "quantity": 23,
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
  "category_id": {
      "_id": 8,
      "name": "Table Cloth 81x81 White",
      "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
  },
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "released": "2021-05-21"
}, {
  "_id": 9,
  "name": "Wine - Riesling Dr. Pauly",
  "price": 94,
  "quantity": 58,
  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
  "category_id": {
      "_id": 9,
      "name": "Wine - Piper Heidsieck Brut",
      "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
  },
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "released": "2021-07-20"
}, {
  "_id": 10,
  "name": "Sauerkraut",
  "price": 30,
  "quantity": 89,
  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "category_id": {
      "_id": 10,
      "name": "Praline Paste",
      "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
  },
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "released": "2021-04-30"
}]