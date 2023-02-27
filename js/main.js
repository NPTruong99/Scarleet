/* ==================== CHANGE BACKGROUND HEADER WHEN SCROLL ==================== */
const header = document.querySelector(".header");
function scrollHeader() {
    if (this.scrollY > 36) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll", scrollHeader);

/* ==================== ACTIVE NAV ITEM WHEN CLICK ==================== */
const navItems = document.querySelectorAll(".nav__item");

const navActive = document.querySelector(".nav__item.active");
const line = document.querySelector(".line");

line.style.left = navActive.offsetLeft + 14 + "px";
line.style.width = navActive.offsetWidth - 30 + "px";

navItems.forEach((navItem, index) => {
    navItem.onclick = function () {
        line.style.left = this.offsetLeft + 14 + "px";
        line.style.width = this.offsetWidth - 30 + "px";
    };
});

/* ==================== SKILL ==================== */
const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeader = document.querySelectorAll(".skills__head");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = `skills__content skills-close`;
    }
    if (itemClass === "skills__content skills-close") {
        this.parentNode.className = `skills__content skills-open`;
    }
}

skillsHeader.forEach((e) => {
    e.addEventListener("click", toggleSkills);
});

/* ==================== SERVICES MODAL ==================== */
const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__btn"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});

/* ==================== MIXITUP FILTER ==================== */
const mixer = mixitup(".portfolio__container", {
    selectors: {
        target: ".portfolio__content",
    },
    animation: {
        duration: 300,
    },
});
/* ==================== ACTIVE MIXITUP WHEN CLICK ==================== */
const linkPortfolios = document.querySelectorAll(".portfolio__item");

function activePortfolio() {
    if (linkPortfolios) {
        linkPortfolios.forEach((linkPortfolio) => {
            linkPortfolio.classList.remove("active-portfolio");
            this.classList.add("active-portfolio");
        });
    }
}

linkPortfolios.forEach((linkPortfolio) =>
    linkPortfolio.addEventListener("click", activePortfolio)
);
