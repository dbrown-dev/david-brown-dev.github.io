//Homepage nav bar soll listener turns background color to black after 50px
const navbarScroll = () => {
    
    if (window.pageYOffset > 50) {
        document.getElementById("navbar").style.backgroundColor = "hsl(0, 0%, 7%)";
    } else {
        document.getElementById("navbar").style.backgroundColor = "";
    }
}

window.addEventListener("scroll", navbarScroll)