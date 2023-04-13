  function myFunction(event) {
    var dots = event.target.previousElementSibling.querySelector(".dots");
    var moreText = event.target.previousElementSibling.querySelector(".more");
    var btnText = event.target;
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }