const footer = document.querySelector("footer > p");
footer.innerHTML = `All rights reserved. <br> &copy; & p ScribeCraft ${new Date().getFullYear()}`;


$(document).ready(function() {
    $("#bars").click(function(){
        $("#nav__links").slideToggle();
    })
})


const login = () => {
    alert("Login Successful !");
}

const contact = () => {
    alert("Thanks for your message. We will get back to you soon.");
}
const buyNow = () => {
    alert("Your ordered has been placed. It will be dispatched soon. Thank you !");
}






