const footer = document.querySelector("footer > p");
footer.innerHTML = `All rights reserved. <br> &copy; & p ScribeCraft ${new Date().getFullYear()}`;



const navToggle = () => {   

    const navBars = document.querySelector(".bar");

        navBars.addEventListener('click', function() {
            const navContent = document.querySelector(".nav__links");
           

            if(navContent.style.display === "flex") {
                navContent.style.display = "none";
            }else{
                navContent.style.display = "flex";
            }
        })    
}


const buyNow = () => {
    alert("Your ordered has been placed. It will be dispatched soon. Thank you !")
}






