
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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} 







function validatePhone(){
var lname = document.getElementById('lastname').value;
var lnameRGEX = /^[a-zA-Z ]+$/;

if(lname.test(lname)){
    document.getElementById('lastname').classList.add('hs-input');
}
else {
    document.getElementById('lastname').classList.remove('hs-input');
    document.getElementById('lastname').classList.add('hs-inputinvaliderror');

}

}









function validatePhone() {

    var phoneNumber = document.getElementById('phone').value;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    if (phoneRGEX.test(phoneNumber)){
        document.getElementById('phone').classList.add('hs-input');
    }
    else{
        document.getElementById('phone').classList.remove('hs-input');
        document.getElementById('phone').classList.add('hs-inputinvaliderror');   
 
    }
}


const email = document.getElementById("email");
email.onblur = function (event){
    const value = email.value;

    if (/^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i .test(value)){
        email.classList.add('hs-input');
    }
    else{
        email.classList.remove('hs-input');
        email.classList.add('hs-inputinvaliderror'); 

    }
}








 


