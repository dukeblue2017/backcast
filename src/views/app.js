var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    

    // this.searchView = new SearchView();
  },


  render: function() {
    this.$el.html(this.template());
    // this.$el.find('.search').html(this.searchView.render())

    new VideoListView({collection: this.videos});
    new VideoPlayerView();
    new SearchView();



    return this;
  },

  template: templateURL('src/templates/app.html')

});
