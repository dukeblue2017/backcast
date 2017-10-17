var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.video = new Video(window.exampleVideoData[0]);
    this.videos = new Videos(window.exampleVideoData);
    this.render();


    // this.searchView = new SearchView();
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({collection: this.videos});
    new VideoPlayerView({model: this.video});
    new SearchView();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
