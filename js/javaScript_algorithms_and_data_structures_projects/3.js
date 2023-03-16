function rot13(str) {
    let decodedStr = '';

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            const decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
            decodedStr += String.fromCharCode(decodedCharCode);
        } else {
            decodedStr += str.charAt(i);
        }
    }

    return decodedStr;
}

rot13('SERR PBQR PNZC')
