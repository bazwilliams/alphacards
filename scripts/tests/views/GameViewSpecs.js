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
            card = new Card();
            candidates = new Cards([{},{},{}]);
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
            it('should display a placeholder for candidate card 1', function () {
                expect(el.find('#candidate-card-1').size()).toBe(1);
            });
            it('should display a placeholder for candidate card 2', function () {
                expect(el.find('#candidate-card-2').size()).toBe(1);
            });
            it('should display a placeholder for candidate card 3', function () {
                expect(el.find('#candidate-card-3').size()).toBe(1);
            });
            describe('When model updated', function () {
                beforeEach(function () {
                    card.set('letter','b');
                });
                it('should append content to the card to guess', function () {
                    expect(el.find('#card-to-guess').children().size()).toBeGreaterThan(0);
                });
            });
            describe('When candidates updated', function () {
                beforeEach(function () {
                    candidates.at(0).set('letter', 'b');
                    candidates.at(1).set('letter', 'c');
                    candidates.at(2).set('letter', 'd');
                });
                it('should append content to candidate card 1', function () {
                    expect(el.find('#candidate-card-1').children().size()).toBeGreaterThan(0);
                });
                it('should append content to candidate card 2', function () {
                    expect(el.find('#candidate-card-2').children().size()).toBeGreaterThan(0);
                });
                it('should append content to candidate card 3', function () {
                    expect(el.find('#candidate-card-3').children().size()).toBeGreaterThan(0);
                });
            })
        });
    });
});
