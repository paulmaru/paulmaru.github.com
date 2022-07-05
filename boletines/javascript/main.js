
//DOM


/*
let closes = document.querySelectorAll(".close");
closes.forEach(function(cldose){
    cldose.addEventListener('click',function(){
        console.log("click =)");

    })
});
*/

/*    QUITAR COMPORTAMIENTO DEFAULT
let closes = document.querySelectorAll(".close");
closes.forEach(function(cldose){
    cldose.addEventListener('click',function(ev){
        ev.preventDefault();
        console.log("1 =)");
        return false;
        console.log("2 =)");
    })
});
*/

let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content")

        //quitar las clases de animación que ya tiene
        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInDown");

        //agregar clases para animar su salida
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp");
 
        //redireccionar a la página principal
        setTimeout(function(){
            location.href = "../index.html";
        },650);
        

        return false;
    })
});

