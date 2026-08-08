const cards = document.querySelectorAll(".glass-card");


/* load animation */

window.addEventListener("load", ()=>{

    cards.forEach((card,index)=>{

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(()=>{

            card.style.transition = "all 0.8s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

        }, index * 250);

    });

});


/* hover animation */

cards.forEach((card)=>{
card.addEventListener("mouseenter", ()=>{

    card.style.transform = "translateY(-8px) scale(1.03)";
    card.style.boxShadow = "0 15px 35px rgba(100,255,218,0.25)";

});

card.addEventListener("mouseleave", ()=>{

    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";

});
   

});