const initialState = {
    key: "165f80a4a96da8b814f1352ed82fd43a",
    show: false,
    city: "",
    country: "",
    city_id : "",
    city_zip:"",
    lat : "",
    lon : "",
    display: {
        cityName: "",
        temp: 0,
        tempMax: 0,
        tempMin: 0,
        desc: "",
        icon: ""

    }
}
const reducer = (state = initialState, action) => {
    // console.log(action)
    // console.log(state.country)
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
        default:
            return state
    }
}

export { reducer }