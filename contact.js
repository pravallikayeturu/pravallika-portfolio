const cards = document.querySelectorAll(".contact-card");

window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "all .8s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 200);

    });

});

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ================= CONTACT FORM ================= */

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const contact = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value

    };

    try {

        const response = await fetch("http://127.0.0.1:8080/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(contact)

        });

        console.log("Status:", response.status);

        const result = await response.text();

        console.log(result);

        document.getElementById("responseMessage").style.color = "#64ffda";
        document.getElementById("responseMessage").innerHTML = result;

        form.reset();

    }
    catch (error) {

        console.error("Full Error:", error);

        alert(error);

        document.getElementById("responseMessage").style.color = "red";
        document.getElementById("responseMessage").innerHTML = "Unable to connect to backend.";

    }

});