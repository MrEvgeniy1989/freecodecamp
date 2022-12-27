function bouncer(arr) {
    let newArr = []
    arr.map(el => {
        if (!!el === true) {
            newArr.push(el)
        }
    });
    return newArr
}

bouncer([7, "ate", "", false, 9]);