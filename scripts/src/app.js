/*global define, document*/
define([
    'jquery',
    'backbone',
    'views/GameView'
], function ($, Backbone, GameView) {
    "use strict";
    var initialize = function () {
        var gameView = new GameView();
        $(document).find('.container').append(gameView.el);
    };

    return {
        initialize: initialize
    };
});