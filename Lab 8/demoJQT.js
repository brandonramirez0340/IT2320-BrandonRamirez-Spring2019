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


$(function(){  //$(document).ready(function(){})
    
   console.log("hello");
   $("#button1").on("click",function(){
      $("#content").parent().css("background-color","purple");      
   });

   $("#button2").on("click",function(){
      $("#content").parents().css("font-size","1.6em");
   });

   $("#button3").on("click",function(){
      $("#content").parentsUntil("#1").css("border","solid 1px red");
   });

   $("#button4").on("click",function(){
      console.log($("#container").children().length);
   });

   $("#button5").on("click",function(){
      $("#content").siblings().css("color","green");
   });

   $("#button6").on("click",function(){
      var descendants = $("#content").find("p");//* means all descendants
      descendants.each(function(){
         console.log($(this).html());
      });
   });

   /* --------------------- */
   /* |                   | */
   /* |       LAB 8       | */
   /* |                   | */
   /* --------------------- */

   // Next()
   $("#button7").on("click",function(){
      $("#p3").next().css("background-color","pink"); // element after element with id p3 => pink background
   });

   // Prev()
   $("#button8").on("click",function(){
      $("#p3").prev().css("background-color","yellow"); // element before element with id p3 => yellow background
   });

   // Closest()
   $("#button9").on("click",function(){
      $("span").closest("div").css("background-color","lime"); // closest div element to span => lime background
   });

   // First()
   $("#button10").on("click",function(){
      $("#desc1 p").first().css("background-color","orange"); // first p element in parent with id desc1 => orange background
   });

   // Last
   $("#button11").on("click",function(){
      $("#desc1 p").last().css("background-color","blue"); // last p element in parent with id desc1 => blue background
   });

   //Filter()
   $("#button12").on("click",function(){
      $("#desc1 p").filter("#p3").css("background-color","gray"); // any p element with id p3 in parent with id desc1 => gray background
   });

   // Not()
   $("#button13").on("click",function(){
      $("#desc1 p").not("#p3").css("background-color","lightgray"); // any p element without id p3 in parent with id desc1 => lightgray background
   });

   // Slice()
   $("#button14").on("click",function(){
      $("#desc1 p").slice(2).css("background-color","red"); // any element after 2nd p element in parent with id desc1 => red background
   });
   
})