// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){ //TODO
    this.on('add', function() {
      // this.model.play();
    }, this);
  }

});