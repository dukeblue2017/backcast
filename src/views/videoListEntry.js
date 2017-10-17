var VideoListEntryView = Backbone.View.extend({
  el: '.video-list',
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
