var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos.search('dogs')
    this.render();
    this.searchView = new SearchView();
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({collection: this.videos}).render();
    new VideoPlayerView({collection: this.videos});
    new SearchView({collection: this.videos});

    return this;
  },

  template: templateURL('src/templates/app.html')

});
