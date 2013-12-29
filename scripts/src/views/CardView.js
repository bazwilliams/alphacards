/*global define*/
define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templates/CardTemplate.tpl'
], function ($, Backbone, Handlebars, Template) {
    "use strict";
    return Backbone.View.extend({
        events: {
            'click .card': 'clicked'
        },
        initialize: function (options) {
            this.callback = options.callback;
            this.listenTo(this.model, 'change:letter', this.render);
        },
        clicked: function () {
            this.callback();
        },
        render: function () {
            var template = Handlebars.compile(Template);
            this.$el.html(template(this.model.toJSON()));
            return this;
        }
    });
});