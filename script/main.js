//Add listeners for orange underline on nav bar menu items
//Declare DOM element variables
const navBlog = document.getElementById('navblog')
const navProjects = document.getElementById('navprojects')
const navContact = document.getElementById('navcontact')
const navArr = [navBlog, navProjects, navContact]

//function to add orange underline on mouseover and remove on mouseleave
const navUnderline = (evt) => {
  if (evt.type === "mouseover") {
    evt.target.style.borderBottom = "3px solid #F05408"
  } else {
    evt.target.style.borderBottom = "none"
  }
}
//for loop to add listeners to each menu item
for (let i = 0; i < navArr.length; i++) {
  navArr[i].addEventListener("mouseover", navUnderline);
  navArr[i].addEventListener("mouseleave", navUnderline);
}