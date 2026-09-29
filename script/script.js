/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* =========================================
   DYNAMIC FOOTER YEAR
========================================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.style.color = "#2563eb";
        }

    });

});


/* =========================================
   SIMPLE SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .detail-card, .certificate"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});
