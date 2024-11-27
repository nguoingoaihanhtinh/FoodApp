import { request } from "./request";

const foodApi = {
  getAllFood: async (paging, limit, type) => {
    let query = `/foods?page=${paging}&limit=${limit}`;
    if (type && type !== "All") {
      query += `&category=${type}`;
    }
    const response = await request.get(query);
    return response.data;
  },
  getNewestFood: async (paging, limit) => {
    let query = `/foods/Newest?page=${paging}&limit=${limit}`;
    const response = await request.get(query);
    return response.data;
  },
  getSearchedFood: async (paging, limit, kw) => {
    let query = `/foods/Search?page=${paging}&limit=${limit}`;
    if (kw) {
      query += `&kw=${kw}`;
    }
    const response = await request.get(query);
    return response.data;
  },
  getFoodById: async (foodId) => {
    let query = `/foods/getfood?id=${foodId}`;
    const response = await request.get(query);
    return response.data;
  },
  getAllFoodTypes: async () => {
    let query = `/category`;
    const response = await request.get(query);
    return response.data;
  },
  getFoodType: async (typeId) => {
    let query = `/category?id=${typeId}`;
    const response = await request.get(query);
    return response.data;
  },
  addFoodType: async (newType) => {
    try {
      const response = await request.post(
        "/Category/addType",
        JSON.stringify(newType),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },
  deleteFoodType: async (id) => {
    try {
      const response = await request.delete(`/Category/${id}`);
      return response.data;
    } catch (error) {
      return false;
    }
  },
  updateFoodType: async (type) => {
    try {
      const response = await request.put(
        `/Category/${type.typeId}`,
        JSON.stringify(type),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },
  addFood: async (newFood) => {
    try {
      const response = await request.post(
        "/Food/addFood",
        JSON.stringify(newFood),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },
  updateFood: async (food) => {
    try {
      const response = await request.put(
        `/Food/${food.FoodId}`,
        JSON.stringify(food),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },
  deleteFood: async (id) => {
    try {
      const response = await request.delete(`/Food/${id}`);
      return response.data;
    } catch (error) {
      return false;
    }
  },
};

export default foodApi;
