
function calculateTax(amount) {
    const taxRate = 0.10;
    return amount * taxRate;
}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum (num1, num2){
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

function isPalindrome (word) {
    const reversedWord = word.split("").reverse().join("")
    return reversedWord === word
}

function calculateDiscountedPrice (originalPrice, discountPercentage){
    const discount = (originalPrice * (discountPercentage/100))

    const newPrice = originalPrice - discount

    return newPrice

}






// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };