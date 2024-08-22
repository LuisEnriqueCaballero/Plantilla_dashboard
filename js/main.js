/*Variables */
let contenidos=document.querySelectorAll('.contenido_etique');
let enlace_mensaje=document.querySelectorAll('.enlace_mensaje a');
let sildebar=document.querySelector('.sildebar');

/*configuracion*/
let confs=document.querySelectorAll(".configuracion");

contenidos.forEach(contenido=>{
    contenido.addEventListener('click',()=>{
        contenido.classList.toggle('arrow')
        let submenu=contenido.nextElementSibling;
        let altura=0;
        if(submenu.clientHeight===0){
            altura=submenu.scrollHeight;
            submenu.style.height=`${altura}px`
        }else{
            altura=0;
            submenu.style.height=`${altura}px`
        }
    })
})
enlace_mensaje.forEach(notifica=>{
    notifica.addEventListener('click',()=>{
        notifica.nextElementSibling.classList.toggle('notifica');
    })
})
/*eventos */
    confs.forEach(conf=>{
    conf.addEventListener('click',()=>{
        let lastchild=conf.lastElementChild;
        lastchild.classList.toggle('herramiento_conf');
    })
})