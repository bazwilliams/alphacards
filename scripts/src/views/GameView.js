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
                return function() {
                    if (candidate.get('letter') === that.model.get('letter')) {
                        that.trigger('win');
                        return true;
                    }
                    that.trigger('incorrect');
                    return false;
                };
            };
            this.guessCardView = new CardView({
               model: this.model
            });
            this.views = {};
            this.collection.forEach(function (model) {
                that.views[model.id] = new CardView({
                    model: model,
                    callback: getCallbackForCandidate(model)
                });
            });
            this.listenTo(this.collection, 'sort', this.render);
        },
        render: function () {
            var template = Handlebars.compile(Template);
            var that = this;
            this.$el.html(template);
            this.assign('#card-to-guess', this.guessCardView);
            this.collection.forEach(function (model, index) {
                that.assign('#candidate-card-'+index, that.views[model.id]);
            });
            return this;
        }
    });
});