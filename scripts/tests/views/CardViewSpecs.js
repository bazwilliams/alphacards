/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'jquery',
    'models/Card',
    'views/CardView'
], function ($, Card, CardView) {
    "use strict";
    describe('CardView', function () {
        var el, model, sut;
        beforeEach(function () {
            el = $('<div>');
            model = new Card(
                { letter: 'a' }
            );
            sut = new CardView({
                el: el,
                model: model
            });
            sut.render();
        });
        it('should display a lowercase a', function () {
            expect(el.find('.card .letter').text()).toBe('a');
        });
    });
});
