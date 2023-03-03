function uniteUnique(arr) {
    arr = [];
    for (var i = 0; i < arguments.length; i++) {
        var temp = arguments[i];

        for (var j = 0; j < temp.length; j++) {
            if (arr.indexOf(temp[j]) < 0) {
                arr.push(temp[j]);
            }
        }

    }
    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);