var SearchView = Backbone.View.extend({
  el : '.search',

  initialize: function() {
    this.render();
    $('.btn').click( function( event ) {
      var text = $('.form-control').val();
      console.log(text)
    })
    $('.form-control').submit(function() {
      console.log('form control')
    })
  },

  render: function() {
    console.log('searchviewrender', this.$el)
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
