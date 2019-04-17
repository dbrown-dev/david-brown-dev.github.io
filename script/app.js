const blogSquare1 = document.getElementById('square1')
const descriptionText1 = document.getElementById('description1')
const blogHeading1 = document.getElementById('blog-heading1')
const blogOverlay1 = document.getElementById('blog-overlay1')
const blogSquare2 = document.getElementById('square2')
const descriptionText2 = document.getElementById('description2')
const blogHeading2 = document.getElementById('blog-heading2')
const blogOverlay2 = document.getElementById('blog-overlay2')
const blogSquare3 = document.getElementById('square3')
const descriptionText3 = document.getElementById('description3')
const blogHeading3 = document.getElementById('blog-heading3')
const blogOverlay3 = document.getElementById('blog-overlay3')
const blogSquare4 = document.getElementById('square4')
const descriptionText4 = document.getElementById('description4')
const blogHeading4 = document.getElementById('blog-heading4')
const blogOverlay4 = document.getElementById('blog-overlay4')
const blogSquare5 = document.getElementById('square5')
const descriptionText5 = document.getElementById('description5')
const blogHeading5 = document.getElementById('blog-heading5')
const blogOverlay5 = document.getElementById('blog-overlay5')
const blogSquare6 = document.getElementById('square6')
const descriptionText6 = document.getElementById('description6')
const blogHeading6 = document.getElementById('blog-heading6')
const blogOverlay6 = document.getElementById('blog-overlay6')
const blogSquare7 = document.getElementById('square7')
const descriptionText7 = document.getElementById('description7')
const blogHeading7 = document.getElementById('blog-heading7')
const blogOverlay7 = document.getElementById('blog-overlay7')
const blogSquare8 = document.getElementById('square8')
const descriptionText8 = document.getElementById('description8')
const blogHeading8 = document.getElementById('blog-heading8')
const blogOverlay8 = document.getElementById('blog-overlay8')

const blogSquareArr = [
  [blogSquare1, descriptionText1, blogHeading1, blogOverlay1],
  [blogSquare2, descriptionText2, blogHeading2, blogOverlay2],
  [blogSquare3, descriptionText3, blogHeading3, blogOverlay3],
  [blogSquare4, descriptionText4, blogHeading4, blogOverlay4],
  [blogSquare5, descriptionText5, blogHeading5, blogOverlay5],
  [blogSquare6, descriptionText6, blogHeading6, blogOverlay6],
  [blogSquare7, descriptionText7, blogHeading7, blogOverlay7],
  [blogSquare8, descriptionText8, blogHeading8, blogOverlay8]
]

const blogSquareClick = (description) => {
  description.style.display = "block";
};

for (let i = 0; i < blogSquareArr.length; i++) {
  blogSquareArr[i][0].addEventListener("mouseover", function () {
    blogSquareArr[i][2].style.display = "none";
    blogSquareArr[i][1].style.display = "block";
    blogSquareArr[i][3].style.background = "rgba(0, 0, 0, 0.7)";
    blogSquareArr[i][3].style.borderRadius = "15px";
    blogSquareArr[i][3].style.height = "100%";
  });
  blogSquareArr[i][0].addEventListener("mouseleave", function () {
    blogSquareArr[i][1].style.display = "none";
    blogSquareArr[i][3].style.background = "";
    blogSquareArr[i][2].style.display = "block";
  });
};