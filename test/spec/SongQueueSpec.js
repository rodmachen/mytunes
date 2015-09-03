describe('SongQueue', function() {
  var playSpy, songData1, songData2;

  beforeEach(function() {
    playSpy = sinon.spy(SongQueue.prototype, 'playFirst');
    songData1 =   {
      url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3",
      title: "If Your Girl Only Knew",
      artist: "Aaliyah",
    };

    songData2 = {
      url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3",
      title: "Hot Like Fire",
      artist: "Aaliyah",
    };
  });

  afterEach(function() {
    SongQueue.prototype.playFirst.restore();
  });

  describe('when a song is added', function() {
    describe('when it is the only song in the song queue', function() {
      xit('plays it', function() {
        var songQueue = new SongQueue();
        songQueue.add(songData1);
        expect(playSpy).to.have.been.called;
      });
    });

    describe('when it is not the only song in the song queue', function() {
      xit('does nothing', function() {
        var songQueue = new SongQueue(songData1);
        songQueue.add(songData2);
        expect(playSpy).to.have.not.been.called;
      });
    });
  });

  describe('when a song ends', function() {
    xit('removes the song from the queue', function() {
      var songQueue = new SongQueue([songData1, songData2]);
      song2 = songQueue.at(1);
      expect(songQueue.length).to.equal(2);
      songQueue.at(0).trigger('ended');
      expect(songQueue.length).to.equal(1);
      expect(songQueue.at(0)).to.equal(song2);
    });

    describe('if there are any songs left in the queue', function() {
      xit('plays the first song in the queue', function() {
        var songQueue = new SongQueue([songData1, songData2]);
        songQueue.at(0).ended();
        expect(playSpy).to.have.been.called;
      });
    });

    describe('if there are no songs left in the queue', function() {
      xit('does nothing', function() {
        var songQueue = new SongQueue(songData1);
        songQueue.at(0).ended();
        expect(playSpy).to.have.not.been.called;
      });
    });
  });

  describe('when a song is dequeued', function() {
    xit('removes the song', function() {
      removeSpy = sinon.spy(SongQueue.prototype, 'remove');
      var songQueue = new SongQueue(songData1);
      songQueue.at(0).dequeue();
      expect(removeSpy).to.have.been.called;
      SongQueue.prototype.remove.restore();
    });
  });

  describe('playFirst', function() {
    xit('plays the first song in the queue', function() {
      sinon.spy(SongModel.prototype, 'play');
      var songQueue = new SongQueue(songData1);
      songQueue.playFirst();
      expect(songQueue.at(0).play).to.have.been.called;
      SongModel.prototype.play.restore();
    });
  });
});
