export const WeatherReducer = (
  state = { location: {}, current: {}, forecastday: [], error: false },
  action
) => {
  switch (action.type) {
    case "getData": {
      return action.data
        ? {
            location: action.data.data.location,
            current: action.data.data.current,
            forecastday: action.data.data.forecast.forecastday,
            error: false,
          }
        : {
            ...state,
            error: true,
          };
    }
  }
};
