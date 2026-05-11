// PARTICULAS

tsParticles.load("particles-js", {

    background:{
        color:{
            value:"transparent"
        }
    },

    particles:{

        number:{
            value:80
        },

        color:{
            value:"#00e5ff"
        },

        links:{
            enable:true,
            color:"#00e5ff",
            distance:150
        },

        move:{
            enable:true,
            speed:1
        },

        size:{
            value:2
        },

        opacity:{
            value:0.5
        }
    }
});

// SCROLL ANIMADO

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.classList.add("show");
        }
    });
});

// CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";
});

// TYPING EFFECT

const text = "El Futuro Comienza Aquí";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 100);
    }
}

typing();

// AUDIO

function playAudio(){

    const audio = document.getElementById("ambientAudio");

    audio.play();
}