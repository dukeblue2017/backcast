var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function() {
    this.collection.on('sync', this.render,this);
  },

  render: function() {

    this.$el.children().detach();
    this.$el.html(this.template());
    this.$(".video-list").append(this.collection.map((video) => {
      return new VideoListEntryView({model:video}).render().el;
    }));

    // this.$el.html();
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
