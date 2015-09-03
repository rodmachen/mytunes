// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views.
// These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
    this.$el.on('click', function() {
      console.log('hi');//TODO Why doesn't this work like below?
    })
  },

  //events: {
  //  'click': function() {
  //    console.log('hi');//TODO like here
  //  }
  //},


  //events: {
  //  'click': function() {
  //    // this.model.play();
  //    this.model.enqueue();
  //  }
  //},

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
