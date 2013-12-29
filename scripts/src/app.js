/*global define, document*/
define([
    'jquery',
    'backbone',
    'service/cardFactory',
    'views/GameView'
], function ($, Backbone, cardFactory, GameView) {
    "use strict";
    var initialize = function () {
        var cards = cardFactory.initialize('abcdefghijklmnopqrstuvwxyz');
        var gameView = new GameView({
            model: cards.guessCard(),
            collection: cards.candidates()
        });
        gameView.render();
//        gameView.on('win', cards.deal);
        $(document).find('.container').append(gameView.el);
    };

    return {
        initialize: initialize
    };
});