
function capitalize(uncappedString){
    let capString = uncappedString
    capString = capString.charAt(0).toUpperCase() + capString.slice(1)
    return capString
}

function reverseString(origString){
    return origString.split("").reverse().join("")
}

function mult(a,b) {
    return a * b
}

module.exports = {capitalize, reverseString, mult}