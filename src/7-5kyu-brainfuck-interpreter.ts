/**
 * Inspired from real-world Brainf**k, we want to create an interpreter of that language which will support the following instructions:
 *
 * > increment the data pointer (to point to the next cell to the right).
 * < decrement the data pointer (to point to the next cell to the left).
 * + increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
 * - decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
 * . output the byte at the data pointer.
 * , accept one byte of input, storing its value in the byte at the data pointer.
 * [ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
 * ] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.
 * The function will take in input...
 *
 * the program code, a string with the sequence of machine instructions,
 * the program input, a string, possibly empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the , instruction
 * ... and will return ...
 *
 * the output of the interpreted code (always as a string), produced by the . instruction.
 * Implementation-specific details for this Kata:
 *
 * Your memory tape should be large enough - the original implementation had 30,000 cells but a few thousand should suffice for this Kata
 * Each cell should hold an unsigned byte with wrapping behavior (i.e. 255 + 1 = 0, 0 - 1 = 255), initialized to 0
 * The memory pointer should initially point to a cell in the tape with a sufficient number (e.g. a few thousand or more) of cells to its right. For convenience, you may want to have it point to the leftmost cell initially
 * You may assume that the ' , ' command will never be invoked when the input stream is exhausted
 * Error-handling, e.g. unmatched square brackets and/or memory pointer going past the leftmost cell is not required in this Kata. If you see test cases that require you to perform error-handling then please open an Issue in the Discourse for this Kata (don't forget to state which programming language you are attempting this Kata in).
 */

export function brainLuck(code: string, input: string) {

    let inputPointer: number = 0;
    let codePointer: number = 0;
    let memoryBusPointer: number = 0;

    const indexedBraces = pairBracesIndexes(code);
    const memoryBus: number[] = Array(100).fill(0)
    const inputArray: number[] = input
        .split('')
        .map(char => char.charCodeAt(0));

    const output: number[] = []

    let loopCounter = 0;
    while (loopCounter < 100000) {

        loopCounter++;

        if (loopCounter === 100000) {
            console.log('kill switch - code interpreter')
        }

        if (codePointer >= code.length) {
            break;
        }

        switch (code[codePointer]) {
            case ',':
                memoryBus[memoryBusPointer] = inputArray[inputPointer];
                inputPointer++
                codePointer++
                break;
            case '+':
                memoryBus[memoryBusPointer] = (memoryBus[memoryBusPointer] + 1) % 256
                codePointer++
                break;
            case '-':
                const newValue: number = memoryBus[memoryBusPointer] - 1
                memoryBus[memoryBusPointer] = newValue >= 0 ? newValue : 255 + newValue
                codePointer++
                break;
            case '>':
                memoryBusPointer++;
                codePointer++
                break;
            case '<':
                memoryBusPointer--;
                codePointer++
                break;
            case '.':
            case ' ':
                output.push(memoryBus[memoryBusPointer])
                codePointer++
                break;
            case '[':
                if (memoryBus[memoryBusPointer] === 0) {
                    codePointer = indexedBraces.get(codePointer) as number
                } else {
                    codePointer++;
                }
                break;
            case ']':
                if (memoryBus[memoryBusPointer] !== 0) {
                    codePointer = indexedBraces.get(codePointer) as number
                } else {
                    codePointer++
                }
                break;
            default:
                console.log('[' + code[codePointer] + '] sign is not supported')
                break;
        }
    }

    return output
        .filter(x => x !== 0)
        .map(x => String.fromCharCode(x))
        .reduce((acc, elem) => acc + elem, "")
}

function pairBracesIndexes(code: string): Map<number, number> {

    const indexedBraces = indexBraces(code)
    const pairedBracesIndexes = new Map<number, number>()

    while (indexedBraces.length > 0) {
        for (let i = 0; i < indexedBraces.length - 1; i++) {
            if (indexedBraces[i].brace === '[' && indexedBraces[i + 1].brace === ']') {

                pairedBracesIndexes.set(indexedBraces[i].index, indexedBraces[i + 1].index)
                pairedBracesIndexes.set(indexedBraces[i + 1].index, indexedBraces[i].index)

                indexedBraces.splice(i + 1, 1)
                indexedBraces.splice(i, 1)
            }
        }
    }

    return pairedBracesIndexes;
}

function indexBraces(code: string) {
    const result: { brace: string, index: number }[] = []
    for (let i = 0; i < code.length; i++) {
        if (code[i] === '[' || code[i] === ']') {
            result.push({brace: code[i], index: i})
        }
    }
    return result;
}
