var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function() {
    this.render()
  },

  render: function() {
    // this.collection.forEach(this.renderMovie, this);

    this.$el.children().detach();

    this.$el.html(this.template());
    console.log("collection: ",this.collection);
    this.collection.forEach((video) => {
      // console.log("Video",video);
      //Make a new VideoListEntryView
      // var videoListEntryView = new VideoListEntryView();
      new VideoListEntryView();
    })


    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
