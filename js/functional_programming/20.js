function sentensify(str) {
    // Only change code below this line
    return str.split(/[^0-9a-z]/ig).join(' ')
    // Only change code above this line
}

sentensify("May-the-force-be-with-you");