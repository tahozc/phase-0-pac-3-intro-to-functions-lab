function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    return console.log(string.toUpperCase())
}

function logWhisper(string) {
    return console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    const canthear = "I can't hear you!"
    const yesIn = "YES INDEED!"
    const loveto = "I would love to!"
    if (string.toLowerCase() === string) {
        return canthear
    }
    else if (string.toUpperCase() === string) {
        return yesIn
    }
    else if ("Let\'s have dinner together!" === string) {
        return loveto
    }
    return null
}