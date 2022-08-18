
setInterval(()=>{
    if(window.scrollY === 0 ){
        document.querySelector(".box").style.display = "block";
        $('.go-top').fadeOut('slow');
    }
}, 1000);
setInterval(()=>{
    if(window.scrollY !== 0 ){
        $('.box').fadeOut('slow');
    }
})
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() +50 >= $(document).height()) {
    $('.go-top').fadeIn('slow');

   }
});
$(function(){

  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  1000);

  });

});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // REFACTOR: fix the  bug for the width of the box

$("#NavButtons").click(()=>{
  if($("#middle-bar").hasClass("middle-bar-normal")){
    $("#middle-bar").removeClass("middle-bar-normal");
    $("#middle-bar").addClass("middle-bar-active");
    $("#bottom-bar").removeClass("bottom-bar-normal");
    $("#bottom-bar").addClass("bottom-bar-active");
    document.querySelector("#middle-bar").style.opacity = 0;
    document.querySelector("#bottom-bar").style.transform = "rotate(-45deg)";
    document.querySelector("#top-bar").style.transform = "rotate(45deg)";
    document.querySelector("#top-bar").style.transformOrigin = "10% 10%";
    document.querySelector("#bottom-bar").style.transformOrigin = "10% 90%";
  }else{
    $("#middle-bar").removeClass("middle-bar-active");
    $("#middle-bar").addClass("middle-bar-normal");
    $("#bottom-bar").removeClass("bottom-bar-active");
    $("#bottom-bar").addClass("bottom-bar-normal");
    document.querySelector("#middle-bar").style.opacity = 1;
    document.querySelector("#bottom-bar").style.transform = "rotate(0deg)";
    document.querySelector("#top-bar").style.transform = "rotate(0deg)";
    document.querySelector("#top-bar").style.transformOrigin = "50% 50%";
    document.querySelector("#bottom-bar").style.transformOrigin = "50% 50%";
    
  }
})
// let navEnabled = false;
// document.querySelector(".navbar-toggler").addEventListener(("click"),()=>{
//   console.log("clicked")
//   setTimeout(function(){
//   document.querySelector(".navbar-toggler").removeEventListener("click",navClick)

//   },1000)
//   setTimeout(function(){
//     document.querySelector(".navbar-toggler").addEventListener("click",navClick);
//  }, 2000);//wa
// });

// function navClick(){
//     let counter = 0;
//   document.querySelectorAll(".toggler-icon").forEach(function(element){
//     console.log("in?")
//       if(!navEnabled){
//       element.style.width = "30px";
//       }else{
          
//           if(counter == 0){
//           element.style.width = "30px";
//           } else if(counter == 1){
//               element.style.width = "20px";
//           }else{
//               element.style.width = "10px";
//           }
  
//       }
//       console.log(element)
//       counter++;
//   })
//   navEnabled = !navEnabled;
//   }

// document.querySelector(".navbar-toggler").addEventListener(("click"), navClick);
