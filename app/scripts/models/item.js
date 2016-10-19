var Backbone = require('backbone');

var Item = Backbone.Model.extend();

var ItemCollection = Backbone.Collection.extend({
   model: Item,
   url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts'

});

module.exports = {
   Item: Item,
   ItemCollection: ItemCollection
};
