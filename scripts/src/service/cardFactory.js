/*global define*/
define([
    'models/Card',
    'collections/Cards'
], function (Card, Cards) {
    "use strict";
    return {
        initialize: function (letters) {
            var card = new Card({letter: letters[0]});
            var candidates = new Cards([card,{letter: letters[1]},{letter: letters[2]}]);
            return {
                guessCard: function () {
                    return card;
                },
                candidates: function () {
                    return candidates;
                },
                deal: function () {
                    card.set('letter', letters[1]);
                }
            };
        }
    };
});