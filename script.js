const cards = document.querySelectorAll(".skill-card");

// Page Load Animation
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "all 0.8s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 200);

    });

});

// Hover Animation
cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";
        card.style.boxShadow = "0 15px 35px rgba(100,255,218,0.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";
        card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";

    });

});