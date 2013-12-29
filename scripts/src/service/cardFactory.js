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
                    var guessCardIndex = Math.floor(Math.random() * letters.length);
                    var candidate2Index = Math.floor(Math.random() * letters.length);
                    var candidate3Index = Math.floor(Math.random() * letters.length);
                    card.set('letter', letters[guessCardIndex]);
                    candidates.get(1).set('letter', letters[candidate2Index]);
                    candidates.get(2).set('letter', letters[candidate3Index]);
                    candidates.sort();
                }
            };
            cards.deal();
            return cards;
        }
    };
});