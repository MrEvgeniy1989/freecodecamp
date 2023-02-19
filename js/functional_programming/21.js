// Only change code below this line
function urlSlug(title) {
    let newTitle = title.toLowerCase().split(' ').filter(el => el !== '').join('-')
    return newTitle

}

// Only change code above this line
urlSlug(' Winter Is  Coming');