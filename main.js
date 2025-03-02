const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

navItems.forEach(item => {
    const navLink = item.querySelector(".nav-link");
    const dropDown = item.querySelector(".dropdown-menu");

    if (dropDown) {
        navLink.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropDown.classList.toggle("open");
                
             
                navItems.forEach(other => {
                    if (other !== item) {
                        const otherDrop = other.querySelector(".dropdown-menu");
                        if (otherDrop && otherDrop.classList.contains("open")) {
                            otherDrop.classList.remove("open");
                        }
                    }
                });
            }
        });
    }
});