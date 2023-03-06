function sumPrimes(num) {
    let sum = 0;

    // Function to check if a number is prime or not
    function isPrime(num) {
        // 1 is not a prime number
        if (num === 1) return false;

        // 2 and 3 are prime numbers
        if (num === 2 || num === 3) return true;

        // Check if num is divisible by any number from 2 to its square root
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }

        // If num is not divisible by any number from 2 to its square root, it is a prime number
        return true;
    }

    // Loop through all numbers from 2 to num
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumPrimes(10)); // Output: 17 (2 + 3 + 5 + 7)