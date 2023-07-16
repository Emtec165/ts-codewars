/**
 * Given the triangle of consecutive odd numbers:
 *
 *              1
 *           3     5
 *        7     9    11
 *    13    15    17    19
 * 21    23    25    27    29
 * ...
 * Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
 *
 * 1 -->  1
 * 2 --> 3 + 5 = 8
 */

export function rowSumOddNumbers(n: number): number {
    const firstOddNumber: number = Math.pow(n, 2) - (n - 1)

    return Array.from(Array(n).keys())
        .map((_, i) => firstOddNumber + i * 2)
        .reduce((acc, num) => acc + num, 0)
}

export function rowSumOddNumbers2(n: number): number {
    const firstOddNumber: number = Math.pow(n, 2) - (n - 1)

    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += firstOddNumber + (i * 2)
    }

    return sum;
}

console.log(rowSumOddNumbers(5))