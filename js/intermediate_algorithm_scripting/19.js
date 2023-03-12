function addTogether() {
    const args = Array.from(arguments);
    if (!args.every(Number.isFinite)) {
        return undefined;
    }
    if (args.length === 1) {
        const x = args[0];
        return function (y) {
            if (Number.isFinite(y)) {
                return x + y;
            } else {
                return undefined;
            }
        };
    } else if (args.length === 2) {
        return args[0] + args[1];
    }
}

addTogether(2,3);

console.log(addTogether(2, 3)); // Output: 5
console.log(addTogether(2)(3)); // Output: 5
console.log(addTogether(2, 'a')); // Output: undefined