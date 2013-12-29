/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'jquery',
    'models/Card',
    'collections/Cards',
    'views/GameView'
], function ($, Card, Cards, GameView) {
    "use strict";
    describe('GameView', function () {
        var el, card, candidates, sut;
        beforeEach(function () {
            el = $('<div></div>');
            card = new Card({id: 0, letter: 'a'});
            candidates = new Cards([card, {id: 1, letter: 'b'},{id: 2, letter: 'z'}]);
            sut = new GameView({
                el: el,
                model: card,
                collection: candidates
            });
        });
        describe('When rendered', function () {
            beforeEach(function () {
                sut.render();
            });
            it('should display placeholder for card to guess', function () {
                expect(el.find('#card-to-guess').size()).toBe(1);
            });
            it('should append content to the card to guess', function () {
                expect(el.find('#card-to-guess').children().size()).toBeGreaterThan(0);
            });
            it('should display a placeholder for candidate card 1', function () {
                expect(el.find('#candidate-card-0').size()).toBe(1);
            });
            it('should append content to candidate card 1', function () {
                expect(el.find('#candidate-card-0').children().size()).toBeGreaterThan(0);
            });
            it('should display a placeholder for candidate card 2', function () {
                expect(el.find('#candidate-card-1').size()).toBe(1);
            });
            it('should append content to candidate card 2', function () {
                expect(el.find('#candidate-card-1').children().size()).toBeGreaterThan(0);
            });
            it('should display a placeholder for candidate card 3', function () {
                expect(el.find('#candidate-card-2').size()).toBe(1);
            });
            it('should append content to candidate card 3', function () {
                expect(el.find('#candidate-card-2').children().size()).toBeGreaterThan(0);
            });
            describe('and clicking', function () {
                var winDetected, wrongGuessDetected, onWin, onWrongGuess;
                beforeEach(function () {
                    winDetected = false;
                    wrongGuessDetected = false;
                    onWin = function () {
                        winDetected = true;
                    }
                    onWrongGuess = function () {
                        wrongGuessDetected = true;
                    }
                    sut.on('win', onWin, this);
                    sut.on('incorrect', onWrongGuess, this);
                });
                afterEach(function () {
                    sut.off('win', onWin, this);
                    sut.off('incorrect', onWrongGuess, this);
                })
                describe('the correct card', function () {
                    beforeEach(function () {
                        el.find('#candidate-card-0 .card').click();
                    })
                    it('should trigger win event', function () {
                        expect(winDetected).toBe(true);
                    });
                    it('should not trigger incorrect guess event', function () {
                        expect(wrongGuessDetected).toBe(false);
                    });
                });
                describe('the first incorrect card', function () {
                    beforeEach(function () {
                        el.find('#candidate-card-1 .card').click();
                    });
                    it('should not trigger win event', function () {
                        expect(winDetected).toBe(false);
                    });
                    it('should trigger incorrect guess event', function () {
                        expect(wrongGuessDetected).toBe(true);
                    });
                });
                describe('the second incorrect card', function () {
                    beforeEach(function () {
                        el.find('#candidate-card-2 .card').click();
                    });
                    it('should not trigger win event', function () {
                        expect(winDetected).toBe(false);
                    });
                    it('should trigger incorrect guess event', function () {
                        expect(wrongGuessDetected).toBe(true);
                    });
                });
            });
        });
    });
});
