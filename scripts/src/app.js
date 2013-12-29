/*global define, document*/
define([
    'jquery',
    'backbone',
    'models/Card',
    'collections/Cards',
    'views/GameView'
], function ($, Backbone, Card, Cards, GameView) {
    "use strict";
    var initialize = function () {
        var gameView = new GameView({
            model: new Card({letter: 'a'}),
            collection: new Cards([{letter: 'a'}, {letter: 'b'}, {letter: 'c'}])
        });
        gameView.render();
        $(document).find('.container').append(gameView.el);
    };

    return {
        initialize: initialize
    };
});