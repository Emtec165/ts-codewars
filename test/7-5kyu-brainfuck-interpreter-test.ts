import {assert, expect} from 'chai';

import {brainLuck} from '../src/7-5kyu-brainfuck-interpreter';

describe('brainLuck', () => {
    it('Echo until byte(255) encountred', () => {
        assert.equal(
            brainLuck(',+[-.,+]', 'Codewars' + String.fromCharCode(255)),
            'Codewars'
        );
    });

    it('Echo until byte(0) encountred', () => {
        assert.equal(
            brainLuck(',[.[-],]', 'Codewars' + String.fromCharCode(0)),
            'Codewars'
        );
    });

    it('Two numbers multiplier', () => {
        assert.equal(
            brainLuck(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.', String.fromCharCode(8, 9)),
            String.fromCharCode(72)
        );
    });

    it('3', () => {
        assert.equal(
            brainLuck('>>>>++<<+>>+.', String.fromCharCode(8, 9)),
            String.fromCharCode(3)
        );
    });

    it('H', () => {
        assert.equal(
            brainLuck('>+++++++++[<++++++++>-]<.',
                String.fromCharCode(8, 9)),
            'H'
        );
    });

    it('He', () => {
        assert.equal(
            brainLuck('>+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.',
                String.fromCharCode(8, 9)),
            'He'
        );
    });

    it('Hello world', () => {
        assert.equal(
            brainLuck('>+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.+++++++..+++.[-]>++++++++[<++++>-] <.>++++++' +
                '+++++[<++++++++>-]<-.--------.+++.------.--------.',
                String.fromCharCode(8, 9)),
            'Hello world'
        );
    });

    it('!', () => {
        assert.equal(
            brainLuck('>++++++++[<++++>-]<+.',
                String.fromCharCode(8, 9)),
            '!'
        );
    });

    it('Hello world!', () => {
        assert.equal(
            brainLuck('>+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.+++++++..+++.[-]>++++++++[<++++>-] <.>++++++' +
                '+++++[<++++++++>-]<-.--------.+++.------.--------.[-]>++++++++[<++++>-]<+.',
                String.fromCharCode(8, 9)),
            'Hello world!'
        );
    });
});
