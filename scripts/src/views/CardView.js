/*global define*/
define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templates/CardTemplate.html'
], function ($, Backbone, Handlebars, CardTemplate) {
    "use strict";
    return Backbone.View.extend({
        render: function () {
            var template = Handlebars.compile(CardTemplate);
            this.$el.html(template(this.model.toJSON()));
        }
    });
});