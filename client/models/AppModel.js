// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
      // this.set('songQueue', new SongQueue());

      // var currentQueue = this.get('songQueue');
      // console.log(this);
    }, this);

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    params.library.on('play', function(song){
      //if(this.get('currentSong').get('title')===song.get('title')) {}
      this.set('currentSong', song);
    }, this);
  }

});
