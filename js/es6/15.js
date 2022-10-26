const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    let failure = [];
    for (let element of arr) {
        failure.push(`<li class="text-warning">${element}</li>`);
    }

    // Only change code above this line

    return failure;
}

const failuresList = makeList(result.failure);