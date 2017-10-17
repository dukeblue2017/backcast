var VideoPlayerView = Backbone.View.extend({
  el: '.player',
  initialize: function() {
    this.currentVideo = this.collection.at(0)
    this.render();
    this.collection.on('sync', function(response) {
      console.log('response.models', response.models);
      this.currentVideo = response.models[0];
      this.render();
    }, this)
    this.collection.on('select', function(vid) {
      this.currentVideo = vid;
      this.render();
    }, this)
  },


  render: function() {

    this.$el.html(this.template(this.currentVideo.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
