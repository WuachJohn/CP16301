const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    description: { type: String },
    category_id: { type: Schema.Types.ObjectId, ref: 'category' },
    image: { type: String },
    released: { type: Date },
});

module.exports = mongoose.model('product', productSchema);