import axios from 'axios'
const loadByName = (city, country, app_key) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${app_key}`)
        .then(res => {
            return res
        })
        .catch(err => console.log(err))
}
const loadById = (city_id, app_key) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${app_key}`)
        .then(res => {
            return res
        })
        .catch(err => console.log(err))
}
const loadByZip = (city_zip, country, app_key) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_zip},${country}&APPID=${app_key}`)
        .then(res => {
            return res
        })

        .catch(err => console.log(err))
}
const loadByCord = (lat, lon, app_key) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${app_key}`)
        .then(res => {
            return res
        })
        .catch(err => console.log(err))
}
export { loadByName, loadById, loadByZip,loadByCord }