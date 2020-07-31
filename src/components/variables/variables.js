const getFullDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ["December", "January", "February", "March", "April", "June", "July", "August", "September", "October", "November"]
    var d = new Date();
    var dayName = days[d.getDay()];
    var monthName = month[d.getMonth()]
    var date = d.getDate()
    var fullDate = dayName + "," + date + " " + monthName
    return fullDate
}

export { getFullDate }