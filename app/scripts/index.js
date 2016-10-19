var $ = require('jquery');
var Handlebars = require('handlebars');
var models = require('./models/item');


var template = Handlebars.compile($("#post-stamp").html());

$(function(){

   var $app = $('#app');
   var $button = $('#app button');
   var $posts  = $('<ul class="posts">')
   var fetchedItems = new models.ItemCollection();

   $app.append($posts);
   $button.click(event, function(){
      event.preventDefault();
      $posts.hide();
      $posts.empty();

      $button.prop('disabled',true);
      $button.html('Loading...');

      fetchedItems.fetch();
   });

   fetchedItems.on('add', function(item){
       $posts.append(template(item.toJSON()));
   });

   fetchedItems.on('sync', function(){
      $posts.slideDown(400,function(){
         $button.prop('disabled',false);
         $button.html('load');
      });

   });

});
