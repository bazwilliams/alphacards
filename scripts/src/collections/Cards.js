/*global define*/
define([
    'jquery',
    'backbone',
    'models/Card'
], function ($, Backbone, Card) {
    "use strict";
    return Backbone.Collection.extend({
        model: Card,
        comparator: function(model) {
            return model.get('letter');
        }
    });
});