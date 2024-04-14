import axios from "axios";

export const searchData = (search) => {
  return async (dispatch) => {
    // 878a9f32e0f744cd8f5133334232707
    const data = await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=33442201108b498ab2d133225242203&q=${search}&days=7&aqi=yes&alerts=yes`
      )
      .catch((err) => {
        console.log("search error");
      });
    dispatch({ type: "getData", data: data });
  };
};
