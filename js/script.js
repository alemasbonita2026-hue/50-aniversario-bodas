const botonAbrir = document.getElementById("abrir");
const pantallaInicio = document.getElementById("pantallaInicio");
const invitacion = document.getElementById("invitacion");
const musica = document.getElementById("musica");

const hero = document.querySelector(".hero");
const foto = document.querySelector(".fotoAnimada");

//========================
// ABRIR INVITACIÓN
//========================

botonAbrir.addEventListener("click", () => {

    musica.play();

    pantallaInicio.classList.add("ocultar");

    invitacion.style.display = "block";

});

//========================
// HERO
//========================

const observerHero = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            hero.classList.add("activo");

        }else{

            hero.classList.remove("activo");

        }

    });

},{
    threshold:0.4
});

observerHero.observe(hero);


//========================
// FOTO
//========================

const observerFoto = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            foto.classList.add("visible");

        }else{

            foto.classList.remove("visible");

        }

    });

},{
    threshold:0.45
});

observerFoto.observe(foto);