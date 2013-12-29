/*global define*/
define([
    'models/Card',
    'collections/Cards'
], function (Card, Cards) {
    "use strict";
    return {
        initialize: function (letters) {
            var card = new Card({id: 0});
            var candidates = new Cards([card, {id: 1}, {id: 2}]);
            var cards = {
                guessCard: function () {
                    return card;
                },
                candidates: function () {
                    return candidates;
                },
                deal: function () {
                    candidates.forEach(function (model) {
                        model.set('letter', letters[Math.floor(Math.random() * letters.length)]);
                    });
                    candidates.sort();
                }
            };
            cards.deal();
            return cards;
        }
    };
});