let contenidos =document.querySelectorAll('.contenido_link');
contenidos.forEach(contenido=>{
    contenido.addEventListener('click',function(){
        let arrow=contenido.children[1].children[0];
        arrow.classList.toggle('girar');
    })
});

let navlink=document.querySelectorAll('.nav-link');
navlink.forEach(navl=>{
    navl.addEventListener('click',function(){
        navl.classList.toggle('click');
    })
})

let button = document.querySelector('.icon-des');
let sidebar = document.querySelector(".sidebar");
button.addEventListener('click', function(){
    sidebar.classList.remove('sidebar1');
})
let close = document.querySelector(".close");
close.addEventListener('click', function(){
    sidebar.classList.add('sidebar1');
})