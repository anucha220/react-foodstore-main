import http from "../http-common.js"

const getAll = () => {
  return http.get("/foodmenu");
}

const get = (id) => {
  return http.get("/foodmenu/" + id);
}

const create = (foodMenu) => {
    return http.post("/foodMenu", foodMenu);
}
const deleteProduct = (id) =>{
  return http.delete("/foodmenu/" + id);
}

const updateProduct = (id, foodMenu) => {
  return http.put("/foodmenu/"+id, foodMenu);
}

const FoodMenuService = {
  getAll,
  get,
  create,
  deleteProduct,
  updateProduct
}

export default FoodMenuService