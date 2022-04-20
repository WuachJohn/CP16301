const categoryService = require('./service');

exports.getCategories = async () => {
  const data = await categoryService.getCategories();
  return data;
}
exports.getCategoriesSelected = async (id) => {
  let data = await categoryService.getCategories();
  data = data.map(item => {
    item = {
      _id: item._id,
      name: item.name,
      decription: item.decription,
      selected: item._id == id
    }
    return item;
  })
  return data;
}
exports.insert = async (category) => {
  try {
      await categoryService.insert(category);
  } catch (error) {

  }

}
exports.update = async (id, category) => {
  try {
      await categoryService.update(id, category);
  } catch (error) {

  }

}