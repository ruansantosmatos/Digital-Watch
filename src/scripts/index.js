const currentTime = () => {
    const data = new Date;
    const hours = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()
    const minutes = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
    const seconds = data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds()

    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
}

const start = () => { setInterval(currentTime, 1000) }
start()