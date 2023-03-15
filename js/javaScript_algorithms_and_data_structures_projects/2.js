function convertToRoman(num) {
    let romanNumeral = '';
    const arabicNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanLetter = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (let i = 0; i < arabicNumeral.length; i++) {
        while (num >= arabicNumeral[i]) {
            romanNumeral += romanLetter[i];
            num -= arabicNumeral[i];
        }
    }

    return romanNumeral;
}

console.log(convertToRoman(36)); // will output "XXXVI"
