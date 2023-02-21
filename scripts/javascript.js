
//GAS PRICES//
document.getElementById("unleaded").innerHTML = "2.00$";   //UNLEADED
document.getElementById("diesel").innerHTML = "1.00$";     //DIESEL
document.getElementById("def").innerHTML = "1.00$";        //DEF

//first carousel//
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//other carousel//
var contentIndex = 1;
showContent(contentIndex);

function plusContent(n) {
  showContent(contentIndex += n);
}

function currentSlide(n) {
  showContent(contentIndex = n);
}

function showContent(n) {
  var i;
  var slides = document.getElementsByClassName("myContent");
  if (n > slides.length) {contentIndex = 1}    
  if (n < 1) {contentIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  slides[contentIndex-1].style.display = "block";  
}
//Nav Bar//
function openNav() {
  document.getElementById("navBar").style.width = "250px";
  document.getElementById("wrapper").style.marginLeft = "250px";
  document.getElementById("dots").style.left = "250px";
  hideButton()
}
function closeNav() {
  document.getElementById("navBar").style.width = "0";
  document.getElementById("wrapper").style.marginLeft= "0";
  document.getElementById("dots").style.left = "0";
  hideButton()
}
function hideButton(){
  if(document.getElementById("openbtn").style.display == "none"){
    document.getElementById("openbtn").style.display = "block";
  }else{
    document.getElementById("openbtn").style.display = "none";
  }
  if(document.getElementById("gasPrices").style.display == "none"){
   document.getElementById("gasPrices").style.display == "none";
  }else{
    document.getElementById("gasPrices").style.display = "none";
  }
  if(document.getElementById("price").style.display == "none"){
    document.getElementById("price").style.display = "absolute";
  }else{
    document.getElementById("price").style.display = "none";
  }
}
