//Homepage nav bar soll listener turns background color to black after 50px
const navbarScroll = () => {
    if (document.body.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "hsl(0, 0%, 7%)";
    } else {
        document.getElementById("navbar").style.backgroundColor = "";
    }
}

window.addEventListener("scroll", navbarScroll)


class BlogSquares {
    constructor() {
        this.squareIds = [];
    }

    changeOnMouseenter(evt) {
        evt.target.firstElementChild.style.display = 'none';
        evt.target.firstElementChild.nextElementSibling.style.display = 'block';
        evt.target.style.boxShadow = 'inset 0 0 0 1000px rgba(0,0,0,.7)';
        evt.target.style.borderRadius = "15px";
    }

    changeOnMouseleave(evt) {
        evt.target.firstElementChild.nextElementSibling.style.display = 'none';
        evt.target.style.boxShadow = 'none';
        evt.target.firstElementChild.style.display = 'block';
    }
};

const blogSquares = new BlogSquares;
const blogSquaresDisplayElement = document.getElementById("blog-squares-display"); 


for(let i = 0; i < blogSquaresDisplayElement.children.length; i++){
    blogSquares.squareIds.push(blogSquaresDisplayElement.children[i].id);
}


blogSquares.squareIds.forEach(element => {
    document.getElementById(element).addEventListener('mouseleave', blogSquares.changeOnMouseleave);
    document.getElementById(element).addEventListener('mouseenter', blogSquares.changeOnMouseenter);
});



