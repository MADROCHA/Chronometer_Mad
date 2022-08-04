let hours = `00`,
    minutes = `00`,
    seconds =  `00`,

    chronoDisplay3 = document.querySelector(`[chrono-hours]`),
    chronoDisplay2 = document.querySelector(`[chrono-minutes]`),
    chronoDisplay1 = document.querySelector(`[chrono-seconds]`),

    chronoCall

function chrono() {

    seconds ++

    if (seconds < 10) seconds = `0` + seconds

    if (seconds > 59) {
    seconds = `00`
    minutes ++

    if (minutes < 10) minutes = `0` + minutes
    }

    if (minutes > 59) {
    minutes = `00`
    hours ++
    
    if (hours < 10) hours = `0` + hours
    }

    chronoDisplay3.textContent = `${hours}`
    chronoDisplay2.textContent = `${minutes}`
    chronoDisplay1.textContent = `${seconds}`


}

    startCount.onclick = (event) => {
    chronoCall = setInterval(chrono, 1000)
    event.target.setAttribute(`disabled`,``)
}

    stopCount.onclick = () => {
    clearInterval(chronoCall)
    startCount.removeAttribute(`disabled`)
}

    restartCount.onclick = () => {
    clearInterval(chronoCall)
    startCount.removeAttribute(`disabled`)
    chronoDisplay3.textContent = `00`
    chronoDisplay2.textContent = `00` 
    chronoDisplay1.textContent = `00` 

    


    hours = `00`,
    minutes = `00`,
    seconds = `00`
}    







/* let hours = `00`,
    minutes = `00`,
    seconds = `00`,

    chronoDisplay3 = document.querySelector(`[chrono-hours]`),
    chronoDisplay2 = document.querySelector(`[chrono-minutes]`),
    chronoDisplay1 = document.querySelector(`[chrono-seconds]`),

    chronoCall

function chrono() {
    seconds ++

    if (seconds < 10) seconds = `0` + seconds

    if (seconds > 59) {
        seconds = `00`
        minutes ++

        if (minutes < 10) minutes = `0` + minutes
    }

    if (minutes > 59) {
        minutes = `00`
        hours ++

        if (hours < 10) hours = `0` + hours
    }
    
    chronoDisplay3.textContent = `${hours}`
    chronoDisplay2.textContent = `${minutes}`
    chronoDisplay1.textContent = `${seconds}`

}

    start.onclick = (event) => {
        chronoCall = setInterval(chrono, 1000)
        event.target.setAttribute(`disabled`,``)
    } 

    stop.onclick = () => {
        clearInterval(chronoCall)
        start.removeAtrribute(`disabled`)
        
    }

    restart.onclick = () => {
        clearInterval(chronoCall)
        start.removeAtrribute(`disabled`)
        chronoDisplay3.textContent = `00`
        chronoDisplay2.textContent = `00`
        chronoDisplay1.textContent = `00`

        hours = `00`,
        minutes = `00`,
        seconds = `00`
    } */