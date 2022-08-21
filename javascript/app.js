const footer = document.querySelector("footer > p");
footer.innerHTML = `All rights reserved. <br> &copy; & p ScribeCraft ${new Date().getFullYear()}`;


$(document).ready(function() {
    $("#bars").click(function(){
        $("#nav__links").slideToggle();
    })
})



const buyNow = () => {
    alert("Your ordered has been placed. It will be dispatched soon. Thank you !")
}






