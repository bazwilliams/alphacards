/*global define*/
define([
    'jquery',
    'backbone',
    'handlebars',
    'models/Card',
    'views/CardView',
    'text!templates/GameTemplate.tpl',
    'extensions'
], function ($, Backbone, Handlebars, Card, CardView, Template) {
    "use strict";
    return Backbone.View.extend({
        initialize: function () {
            this.guessCardView = new CardView({
               model: this.model
            });
            this.candidate1View = new CardView({
                model: this.collection.at(0)
            });
            this.candidate2View = new CardView({
                model: this.collection.at(1)
            });
            this.candidate3View = new CardView({
                model: this.collection.at(2)
            });
        },
        render: function () {
            var template = Handlebars.compile(Template);
            this.$el.html(template);
            this.assign({
                '#card-to-guess': this.guessCardView,
                '#candidate-card-1': this.candidate1View,
                '#candidate-card-2': this.candidate2View,
                '#candidate-card-3': this.candidate3View
            });
            return this;
        }
    });
});