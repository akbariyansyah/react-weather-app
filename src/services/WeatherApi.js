import axios from 'axios'
const loadByName = (city, country, app_key) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${app_key}`)
        .then(res => {
            return res
        })
        .catch(err => console.log(err))
}

export { loadByName }