/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'jquery',
    'models/Card',
    'views/CardView'
], function ($, Card, CardView) {
    "use strict";
    describe('CardView', function () {
        var el, model, sut, callback;
        beforeEach(function () {
            el = $('<div></div>');
            model = new Card(
                { letter: 'a' }
            );
            callback = {
                callback: function () {}
            };
            spyOn(callback, 'callback');
            sut = new CardView({
                el: el,
                model: model,
                callback: callback.callback
            });
        });
        describe('when rendered', function () {
            beforeEach(function () {
                sut.render();
            });
            it('should display a lowercase a', function () {
                expect(el.find('.card .letter').text()).toBe('a');
            });
            describe('and clicked', function () {
                beforeEach(function () {
                    el.find('.card').click();
                });
                it('should execute callback', function () {
                    expect(callback.callback).toHaveBeenCalled();
                })
            });
            describe('and changed', function () {
                beforeEach(function () {
                    model.set('letter', 'b');
                });
                it('should display a lowercase b', function () {
                    expect(el.find('.card .letter').text()).toBe('b');
                });
            });
        });
    });
});
