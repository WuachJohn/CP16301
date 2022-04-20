const productService = require('./service');
const date = require('../../utils/date');
exports.getProducts = async () => {
    try {
        let products = await productService.getProducts();
    products = products.map((item, index) => {
        item = {
            released: date.format(item.released),
            _id: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
            description: item.description,
            category_id: item.category_id,
            index: index + 1
        }
        return item;
    })
    return products;
    } catch (error) {
        return [];
    }
    
}
exports.getProductById = async (id) => {
    try {
        let product = await productService.getProductById(id);
        product = {
            released: date.format(product.released),
            _id: product._id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            image: product.image,
            description: product.description,
            category_id: product.category_id,
        }
        return product;
    } catch (error) {
        return {};
    }

}
exports.insert = async (product) => {
    try {
        await productService.insert(product);
    } catch (error) {

    }

}

exports.delete = async (id) => {
    try {
        await productService.delete(id);
    } catch (error) {

    }

}
exports.update = async (id, product) => {
    try {
        await productService.update(id, product);
    } catch (error) {

    }

}