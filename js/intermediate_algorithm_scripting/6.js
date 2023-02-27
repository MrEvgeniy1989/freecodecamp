function translatePigLatin(str) {
    const vowelList = 'aeiouAEIOU'
    const arrStrLetters = str.split('')

    if (vowelList.indexOf(arrStrLetters[0]) !== -1) {
        return str + 'way'
    }

    for (let i = 0; i < arrStrLetters.length; i++) {
        if (vowelList.indexOf(str[0]) < 0) {
            str = str.slice(1) + str[0]
        }
    }
    return str + 'ay'
}

translatePigLatin('gconsonant');