// alert("workingggg")
$(document).ready(function() {
    $("#design").click(function(){
        // action on mouse toggles over design
      $(".firstClick").toggle();
      $("#design-show").toggle();
      $("#design-show").css("textAlign","center");
      $("p,h6")
      .on("mouseenter",function() {
        $(this).css({
          "font-weight":"bolder"
        });
      }) 
    //    action on mouseleave to restore to default
      .on("mouseleave", function(){
        var styles={
          fontWeight:"normal"
        }
      })
    })
  })
  $(document).ready(function() {
    $("#develop").click(function(){
        // action on mouse toggles over design
      $(".secondClick").toggle();
      $("#develop-show").toggle();
      $("#develop-show").css("textAlign","center");
      $("p,h6")
      .on("mouseenter",function() {
        $(this).css({
          "font-weight":"bolder"
        });
      }) 
    //    action on mouseleave to restore to default
      .on("mouseleave", function(){
        var styles={
          fontWeight:"normal"
        }
      })
    })
  })


  $(document).ready(function() {
      //    action on mouseenter on the product management
    $("#product").click(function(){
      $(".thirdClick").toggle();
      $("#product-show").toggle();
      $("#product-show").css("textAlign","center");
      $("p,h6")
      .on("mouseenter",function() {
        $(this).css({
          "font-weight":"bolder"
        });
      })
     //    action on mouseleave to restore to default
      .on("mouseleave", function(){
        var styles={
          fontWeight:"normal"
        }
      })
    })
  })

//   $(document).ready(function(){

//     $("Id4work4").mouseover(function(){
//       $(".overlay4").show({opacity: '1'});
//     }).mouseout(function(){
//       $(".overlay4").hide({opacity: '0'});
//     });
  
//     });

$(document).ready(function() {
  $("#blanks").submit(function(event) {
      var nameInput = $("input#name").val();
      var emailInput = $("input#email").val();
      var messageInput = $("input#message").val();
      $(".name").text(nameInput);
      $(".email").text(emailInput);
      $(".message").text(messageInput);
   });
  });