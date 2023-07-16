/**
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary
 * representation of that number. You can guarantee that input is non-negative.
 *
 * Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */

export function countBits(n: number): number {
    const binaryNumber: string = n.toString(2);
    return (binaryNumber.match(/1/g) || []).length;
}

console.log('countBits(1)_value: ', countBits(1));
console.log('countBits(2)_value: ', countBits(2));
console.log('countBits(3)_value: ', countBits(3));
console.log('countBits(6506760529183785)_value: ', countBits(6506760529183785));