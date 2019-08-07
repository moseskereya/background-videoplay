let ourWidth = 1;
const a = document.querySelector('.sidenav');
const b = document.querySelector('.toggle');
const c = document.querySelector('.side');



b.addEventListener('click', function(){
    if(ourWidth === 1){
        a.style.height = '30%';
        c.style.display = "block";
        ourWidth = 0
    }else{
        a.style.height = '0%';
        c.style.display = "none"
        ourWidth = 1;
    }
})