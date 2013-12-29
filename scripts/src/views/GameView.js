/*global define*/
define([
    'jquery',
    'backbone',
    'handlebars',
    'views/CardView',
    'text!templates/GameTemplate.tpl',
    'extensions'
], function ($, Backbone, Handlebars, CardView, Template) {
    "use strict";
    return Backbone.View.extend({
        initialize: function () {
            var that = this;
            var getCallbackForCandidate = function (candidate) {
                return candidate.get('letter') === that.model.get('letter') ? that.correctCardClicked : that.incorrectCardClicked;
            };
            this.guessCardView = new CardView({
               model: this.model
            });
            this.candidate1View = new CardView({
                model: this.collection.at(0),
                callback: getCallbackForCandidate(this.collection.at(0))
            });
            this.listenTo(this.candidate1View, 'win', this.correctCardClicked);
            this.listenTo(this.candidate1View, 'incorrect', this.incorrectCardClicked);
            this.candidate2View = new CardView({
                model: this.collection.at(1),
                callback: getCallbackForCandidate(this.collection.at(1))
            });
            this.listenTo(this.candidate2View, 'win', this.correctCardClicked);
            this.listenTo(this.candidate2View, 'incorrect', this.incorrectCardClicked);
            this.candidate3View = new CardView({
                model: this.collection.at(2),
                callback: getCallbackForCandidate(this.collection.at(2))
            });
            this.listenTo(this.candidate3View, 'win', this.correctCardClicked);
            this.listenTo(this.candidate3View, 'incorrect', this.incorrectCardClicked);
        },
        correctCardClicked: function () {
            this.trigger('win');
        },
        incorrectCardClicked: function () {
            this.trigger('incorrect');
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