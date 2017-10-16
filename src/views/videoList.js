var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function() {
    this.render()
  },

  render: function() {
    // this.collection.forEach(this.renderMovie, this);
    console.log('this in VideoListEntryView: ', this)

    this.$el.children().detach();

    this.$el.html(this.template());

    this.collection.forEach((video) => {
      //Make a new VideoListEntryView
      console.log('this should be a video model: ', video)
      // new VideoListEntryView(video)
    })


    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
