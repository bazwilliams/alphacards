/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'jquery',
    'views/GameView'
], function ($, GameView) {
    "use strict";
    describe('GameView', function () {
        var el, sut;
        beforeEach(function () {
            el = $('<div>');
            sut = new GameView({
                el: el
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
        });
    });
});
