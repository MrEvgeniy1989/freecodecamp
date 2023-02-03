// The global variable
const bookList = ['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae'];

// Change code below this line
function add(bookList, bookName) {

    const bookListcopy = [...bookList]
    bookListcopy.push(bookName);
    return bookListcopy;

    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    let bookListcopy = [...bookList]
    const book_index = bookListcopy.indexOf(bookName);
    if (book_index >= 0) {


        bookListcopy.splice(book_index, 1);
        return bookListcopy;

        // Change code above this line
    }
}