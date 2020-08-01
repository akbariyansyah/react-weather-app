import axios from 'axios'

const baseUrl = "https://api.openweathermap.org/data/2.5/weather"

const loadByName = (city, country, app_key) => {
    return axios.get(`${baseUrl}?q=${city},${country}&APPID=${app_key}`)
        .then(res => {
            return res
        })
        .catch(err => console.log(err))
}
const loadById = (city_id, app_key) => {
    return axios.get(`${baseUrl}?id=${city_id}&appid=${app_key}`)
        .then(res => {
            return res
        })
        .catch(err => console.log(err))
}
const loadByZip = (city_zip, country, app_key) => {
    return axios.get(`${baseUrl}?q=${city_zip},${country}&APPID=${app_key}`)
        .then(res => {
            return res
        })

        .catch(err => console.log(err))
}
const loadByCord = (lat, lon, app_key) => {
    return axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${app_key}`)
        .then(res => {
            return res
        })
        .catch(err => console.log(err))
}
export { loadByName, loadById, loadByZip,loadByCord }