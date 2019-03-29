//JQ DOM Traversal
//$("") will be used as a frame of reference
   //parent()
   //parents()
   //find()
   //siblings()
   //children()
   
   

    //Additional Sibling methods 
    //next
    //nextAll
    //nextUntil   
      
     
   //prev
   //prevAll
   //prevUntil
    
   //closest
   
   
   //first
   //last
   //filter
   //not
   
   //slice
$(function(){ // Same as document.ready
   console.log("hello");
   $("#button1").on("click", function(){
      $("#content").parent().css("background-color", "purple");
   });

   $("#button2").on("click", function(){
      $("#content").parents().css("font-size", "1.6em");
   });

   $("#button3").on("click", function(){
      $("#content").parentsUntil("#1").css("border", "solid 1px red");
   });

   $("#button4").on("click", function(){
      $("#container").children().css("color", "orange");
   });

   $("#button5").on("click", function(){
      $("#content").siblings().css("color", "green");
   });

   $("#button6").on("click", function(){
      var descendants = $("#content").find("p");
      descendants.each(function(){
         console.log($(this).html());
      });
   });

   })
   
  