/*global define*/
define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templates/GameTemplate.tpl'
], function ($, Backbone, Handlebars, Template) {
    "use strict";
    return Backbone.View.extend({
        render: function () {
            var template = Handlebars.compile(Template);
            this.$el.html(template);
        }
    });
});