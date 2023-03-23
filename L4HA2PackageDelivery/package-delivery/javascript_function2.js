function toHours(seconds){
    let hours = Math.floor(seconds / 3600)
    remainder = seconds % 3600
    return {
        hour      : hours,
        remainder : remainder
    }
}

function toMinutes(seconds){
    let minutes = Math.floor(seconds / 60)
    remainder = seconds % 60
    return {
        minutes   : minutes,
        remainder : remainder
    }
}

function humanDuration(duration=0){
    hoursObject   = toHours  (duration)
    minutesObject = toMinutes(hoursObject.remainder)
    seconds = minutesObject.remainder
    return `The formatted duration of ${duration.toLocaleString()} ${duration > 1 ? "seconds" : "second"} is ${hoursObject.hour} ${hoursObject.hour > 1 ? "Hours" : "Hour"}, ${minutesObject.minutes} ${minutesObject.minutes > 1 ? "Minutes" : "Minute"} and ${seconds} ${seconds > 1 ? "Seconds" : "Second"}.`
}

console.log(humanDuration(4800))
console.log(humanDuration(5212))
console.log(humanDuration(300))
