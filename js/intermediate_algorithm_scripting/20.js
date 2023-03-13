const Person = function (firstAndLast) {
    let firstName = firstAndLast.split(' ')[0];
    let lastName = firstAndLast.split(' ')[1];

    this.getFirstName = function () {
        return firstName;
    };
    this.getLastName = function () {
        return lastName;
    };
    this.getFullName = function () {
        return firstName + ' ' + lastName;
    };
    this.setFirstName = function (first) {
        firstName = first;
    };
    this.setLastName = function (last) {
        lastName = last;
    };
    this.setFullName = function (firstAndLast) {
        firstName = firstAndLast.split(' ')[0];
        lastName = firstAndLast.split(' ')[1];
    };

    return firstAndLast;
};

const bob = new Person('Bob Ross');