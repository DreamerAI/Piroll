    'use strict';

    
    // When the user scroll the page, execute the function
    window.onscroll = function() {stickyScroll()}
    
    // Get the header 
    let header = document.getElementById("myHeader")

    // Get the offset position of the navbar
    let sticky = header.offsetTop

    //Add the sticky class to the header when the user reach it's scroll position. Remove "sticky" when you leave scroll position

    function stickyScroll(){
      if (window.pageYOffset > sticky){
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };


    const handleHoverOn = event => {
      const target = event.target.querySelector("i");
      target.classList.remove("hide");
    };
    
    const handleHoverOut = event => {
      const target = event.target.querySelector("i");
      target.classList.add("hide");
    };
    
    document.querySelectorAll(".workBox").forEach(item => {
      item.addEventListener("mouseover", handleHoverOn);
      item.addEventListener("mouseout", handleHoverOut);
    });



    var sliderIndex = 1;
    showSlides(sliderIndex);

    function plusSlides(n){
      showSlides(sliderIndex += n);
    }
    
    function  currentSlide(n){
      showSlides(sliderIndex = n);
    }

    function showSlides(n){
      let i;
      let slides = document.getElementsByClassName("slideText");
      var dots = document.getElementsByClassName("slider")
      if(n > slides.length){sliderIndex = 1}
      if(n < 1){sliderIndex = slides.length}

      for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
      }
      for (i=0; i < dots.length; i++  ){
        dots[i].className = dots[i].className.replace("active", "")
      }
      slides[sliderIndex-1].style.display = "block";
      dots[sliderIndex-1].className += "active";
    }
