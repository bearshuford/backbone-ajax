var $ = require('jquery');
var Handlebars = require('handlebars');
var models = require('./models/item');


var template = Handlebars.compile($("#post-stamp").html());

$(function(){

   var $app = $('#app');
   var $button = $('#app button');
   var $posts  = $('<div class="posts">')
   var fetchedItems = new models.ItemCollection();

   $button.click(event, function(){
      event.preventDefault();
      $button.prop('disabled',true);
      $button.html('Loading...');
      $posts.empty();
      $posts.remove();
      fetchedItems.fetch();
   });

   fetchedItems.on('add', function(item){
       $posts.append(template(item.toJSON()));
   });

   fetchedItems.on('sync', function(){
      setTimeout(function(){
         $button.html('load');
         $button.prop('disabled',false);
         $app.append($posts);
      }, 100);

   });



});
