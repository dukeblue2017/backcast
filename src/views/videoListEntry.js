var VideoListEntryView = Backbone.View.extend({

  handleClick: function(event) {
    this.model.select();
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // console.log(this.$el.append(this.$el[0].innerHTML))
    // $('video-list-entry-title').text(title);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
