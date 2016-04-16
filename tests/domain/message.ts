import {expect} from 'chai';
import {Message} from '../../src/domain/message';

describe('message', () => {
    describe("isCommand", function () {
        var dataProvider = [
            {msg: '!command', expected: true},
            {msg: '!command arguments', expected: true},
            {msg: 'notcommand', expected: false},
            {msg: 'not command', expected: false},
            {msg: '', expected: false},
            {msg: '!', expected: false},
            {msg: '! ', expected: false},
            {msg: '! command', expected: false}
        ];

        dataProvider.forEach(function (data) {
            it(`should return '{data.expected}' when is '{data.msg}'`, function () {
                expect(new Message(data.msg).isCommand()).to.be.equal(data.expected);
            });
        });
    });

    describe("getCommand", function () {
        var dataProvider = [
            {msg: '!command', expected: 'command'},
            {msg: '!command arguments', expected: 'command'}
        ];

        dataProvider.forEach(function (data) {
            it(`should return '{data.expected}' when is '{data.msg}'`, function () {
                expect(new Message(data.msg).getCommand()).to.be.equal(data.expected);
            });
        });
    });

    describe("getArguments", function () {
        var dataProvider = [
            {msg: '!command', expected: ''},
            {msg: '!command argument', expected: 'argument'},
            {msg: '!command arg1 arg2', expected: 'arg1 arg2'}
        ];

        dataProvider.forEach(function (data) {
            it(`should return '{data.expected}' when is '{data.msg}'`, function () {
                expect(new Message(data.msg).getArguments()).to.be.equal(data.expected);
            });
        });
    });
});
