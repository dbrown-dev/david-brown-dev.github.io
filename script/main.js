const navbar = {
  navbarMenuId: document.getElementById('navbarSupportedContent'),

  navbarEventListeners() {
    this.navbarMenuId.addEventListener('mouseover', (event) => {
      if (event.target.className.slice(0, 8) === 'nav-link') {
        event.target.style.borderBottom = "1px solid #F05408";
      }
    });
    this.navbarMenuId.addEventListener('mouseout', (event) => {
      if (event.target.className.slice(0, 8) === 'nav-link') {
        event.target.style.borderBottom = "none";
      }
    });
  }
}

navbar.navbarEventListeners();