const initialState = {
    key: "165f80a4a96da8b814f1352ed82fd43a",
    show: false,
    city: "",
    country: "",
    city_id: "",
    city_zip: "",
    lat: "",
    lon: "",
    display: {
        cityName: "",
        countryName: "",
        temp: 0,
        tempMax: 0,
        tempMin: 0,
        wind: 0,
        desc: "",
        icon: ""
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD":
            return {
                ...state,
                show: true,
                display: {
                    cityName: action.value.data.name,
                    temp: action.value.data.main.temp,
                    tempMax: action.value.data.main.temp_max,
                    tempMin: action.value.data.main.temp_min,
                    wind: action.value.data.wind.speed,
                    countryName: action.value.data.sys.country,
                    desc: action.value.data.weather[0].description,
                    icon: action.value.data.weather[0].icon
                }

            };
        case "CHANGE":
            return { ...state, [action.value.name]: action.value.value }
        case "CHANGECOUNTRY":
            return {
                ...state,
                country: action.value
            }
        case "RESET":
            return {
                ...state,
                show: false,
                city: "",
                country: "",
                city_id: "",
                city_zip: "",
                lat: "",
                lon: "",
                display: {
                    cityName: "",
                    countryName: "",
                    temp: 0,
                    tempMax: 0,
                    tempMin: 0,
                    wind: 0,
                    desc: "",
                    icon: ""
                }
            }
        default:
            return state
    }
}

export { reducer }