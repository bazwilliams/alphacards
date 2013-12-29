/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'backbone',
    'service/cardFactory'
], function (Backbone, cardFactory) {
    "use strict";
    describe('CardFactory', function () {
        var sut;
        beforeEach(function () {
            sut = cardFactory.initialize(['a','b','c']);
        });
        describe('When getting guess card', function () {
            var card;
            beforeEach(function () {
                card = sut.guessCard();
            });
            it('card should contain a letter', function () {
                expect(card.has('letter')).toBeTruthy();
            });
        });
        describe('When getting candidates', function () {
            var candidates;
            beforeEach(function () {
                candidates = sut.candidates();
            })
            it('candidates should have a size of 3', function () {
                expect(candidates.size()).toBe(3);
            });
            it('candidate at 0 should have letter', function () {
                expect(candidates.at(0).has('letter')).toBeTruthy();
            });
            it('candidate at 1 should have letter', function () {
                expect(candidates.at(1).has('letter')).toBeTruthy();
            });
            it('candidate at 2 should have letter', function () {
                expect(candidates.at(2).has('letter')).toBeTruthy();
            });
            it('candidates should contain the card to guess', function () {
                expect(candidates.models).toContain(sut.guessCard());
            });
        });
        describe('When dealing a new game', function () {
            describe('When changing guess card', function () {
                var initialLetter, newLetter;
                beforeEach(function () {
                    initialLetter = sut.guessCard().get('letter');
                    sut.deal();
                    newLetter = sut.guessCard().get('letter');
                });
                it('card letter should change', function () {
                    expect(initialLetter).not.toBe(newLetter);
                });
            });
        });
    });
});
