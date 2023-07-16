/**
 * dec to hex converter
 */

export function rgb(r: number, g: number, b: number): string {
    return (decToHex(r) + decToHex(g) + decToHex(b)).toUpperCase()
}

export function rgb2(...rgb: [number, number, number]): string {
    return rgb.map(x => Math.min(Math.max(x, 0), 255)
        .toString(16)
        .toUpperCase()
        .padStart(2, '0'))
        .join('')
}


function decToHex(number: number): string {
    if (number < 0) {
        return '00'
    } else if (number > 255) {
        return 'FF'
    } else {
        return number.toString(16).padStart(2, '0');
    }
}

console.log('rgb(255, 255, 255)_value: ', rgb(255, 255, 255));
console.log('rgb(255, 255, 300)_value: ', rgb(255, 255, 300));
console.log('rgb(0, 0, 0)_value: ', rgb(0, 0, 0));
console.log('rgb(148, 0, 211)_value: ', rgb(148, 0, 211));