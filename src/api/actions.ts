import axios, { AxiosError } from "axios";

const API_URL = "https://ideal-space-guide-64w5pwv69qqfrvw-3000.app.github.dev/api";

export const getWeatherData = async (food: string): Promise<FoodData> => {
  return new Promise<FoodData>((resolve, reject) => {
    axios
      .get(`${API_URL}/food/${food}`)
      .then((res) => {
        resolve({
          food: food,
          weight: res.data.weight,
          calories: res.data.calories,
          price: res.data.price,
          availability: res.data.availability,
          delivery: res.data.delivery,
          time_to_prepare: res.data.time_to_prepare,
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("Food not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(error.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};
