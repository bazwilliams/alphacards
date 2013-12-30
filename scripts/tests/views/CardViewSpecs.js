/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'jquery',
    'models/Card',
    'views/CardView'
], function ($, Card, CardView) {
    "use strict";
    describe('CardView', function () {
        var el, model, sut, callback, callbackResult;
        beforeEach(function () {
            el = $('<div></div>');
            model = new Card(
                { letter: 'a' }
            );
            callback = {
                callback: function () {}
            };
            spyOn(callback, 'callback').andReturn(callbackResult);
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
                describe('where callback returns false', function () {
                    beforeEach(function () {
                        callbackResult = false;
                        el.find('.card').click();
                    });
                    it('should execute callback', function () {
                        expect(callback.callback).toHaveBeenCalled();
                    });
                    it('should add inactive class', function () {
                        expect(el.find('.inactive').size()).toBe(1);
                    });
                });
                describe('where callback returns true', function () {
                    beforeEach(function () {
                        callbackResult = true;
                        el.find('.card').click();
                    });
                    it('should execute callback', function () {
                        expect(callback.callback).toHaveBeenCalled();
                    });
                    it('should not add inactive class', function () {
                        expect(el.find('.inactive').size()).toBe(0);
                    });
                });
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
