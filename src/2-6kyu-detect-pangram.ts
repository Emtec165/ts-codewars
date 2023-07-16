/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 * because it uses the letters A-Z at least once (case is irrelevant).
 *
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

export const isPangram = (phrase: string): boolean => {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz'
    const lowercasePhrase = phrase.toLowerCase();

    for (const alphabetElement of alphabet) {
        if (!lowercasePhrase.includes(alphabetElement)) {
            return false;
        }
    }
    return true;
}

export const isPangram2 = (phrase: string): boolean =>
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v','w','x','y','z']
    .every(l => phrase.toLowerCase().includes(l))

export const isPangram3 = (phrase: string): boolean => new Set(phrase.toLowerCase().match(/[a-zA-Z]/gi)).size === 26

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))