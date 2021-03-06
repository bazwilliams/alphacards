/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'backbone',
    'service/cardFactory'
], function (Backbone, cardFactory) {
    "use strict";
    describe('CardFactory', function () {
        var sut;
        beforeEach(function () {
            sut = cardFactory.initialize('abcdefghijklmnopqrstuvwxyz');
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
                var card, candidates;
                beforeEach(function () {
                    candidates = sut.candidates();
                    card = sut.guessCard();
                    spyOn(card, 'set').andCallThrough();
                    spyOn(candidates, 'sort').andCallThrough();
                    sut.deal();
                });
                it('card letter should change', function () {
                    expect(card.set).toHaveBeenCalled();
                });
                it('should resort the collection', function () {
                    expect(candidates.sort).toHaveBeenCalled();
                })
                it('should not increase the size of the collection', function () {
                    expect(candidates.size()).toBe(3);
                })
            });
        });
    });
});
