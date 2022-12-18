const button = document.querySelector("#btn");
const animation = document.querySelector("#anim")
const p = document.querySelectorAll("div p");
const section = document.querySelector("section");
const zwrd = document.querySelector("#ZWRD");
const clique = document.querySelector("#clique");
const pctr = document.querySelector("#pctr");
const box = document.querySelector("#box");
let s = 0
let isClickable = false


 
animation.addEventListener("click", function(){
    for (let i = 0; i < 7; i += 1){
            p[i].classList.toggle("animateText");
    }
})

button.addEventListener('click', function(){
    if (section.classList.contains("black")){
        section.classList.remove("black")
    }
    else{
        section.classList.add("black")
    }
})

clique.addEventListener('mouseover', function(){
    if (isClickable === false){
        if(clique.classList.contains("déplacement")){  
            clique.classList.remove("déplacement")
        }
        else{
            clique.classList.add("déplacement")
        }
    }
    s++
    if (s === 10){
        zwrd.style = 'opacity: 100%;'        
    }
})

zwrd.addEventListener('click', function(){
    box.classList.add("tada")  
    pctr.style = 'opacity: 100%;' 
    setTimeout(() => {
        pctr.style = 'opacity: 0%; !important' ;
      }, "3000")
    isClickable = true

})
