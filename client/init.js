$(function(){
  // set up model objects
  // Songs is a Collection
  var library = new Songs(songData);
  var app = new AppModel({library: library});

  // build a view for the top level of the whole app
  var appView = new AppView({model: app, idk: []});

  // put the view onto the screen
  $('body').append(appView.render());
});