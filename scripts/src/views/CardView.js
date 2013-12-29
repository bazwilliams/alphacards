/*global define*/
define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templates/CardTemplate.tpl'
], function ($, Backbone, Handlebars, CardTemplate, Card) {
    "use strict";
    return Backbone.View.extend({
        render: function () {
            var template = Handlebars.compile(CardTemplate);
            this.$el.html(template(this.model.toJSON()));
            return this;
        }
    });
});