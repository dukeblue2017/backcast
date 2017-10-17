var SearchView = Backbone.View.extend({
  el : '.search',

  initialize: function() {
    this.render();
    $('.btn').click( function( event ) {
      event.preventDefault();
      var text = $('.form-control').val();
      this.collection.search(text)
    }, this)

  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
