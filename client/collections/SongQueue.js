// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.at(0).play();
      }
    }, this);
  },

  //TODO Difference between these.
  //events: {
  //  'add': function() {
  //    if(this.length === 1) {
  //      this.at(0).play();
  //    }
  //  }
  //},

});