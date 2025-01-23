$(document).ready(function () {
    $('#myTable').DataTable({
        responsive: true
    });
});

//active class
let navitem=document.querySelectorAll('.nav-item');
for(let i=0; i<navitem.length; i++)
{
    navitem[i].addEventListener('click', function(){
        let activeitem=document.querySelectorAll('.active');
        for(let j=0; j<navitem.length; j++)
        {
            navitem[j].classList.remove('active');
        }
        this.classList.add('active');
    });
}

//toggler
let asidecontentwrapper=document.querySelector('.aside-content-wrapper');
let toggler=document.querySelector('.toggler');
let asidee=document.querySelector('.aside');
toggler.addEventListener('click', function () {
    asidee.classList.toggle('hide');
    asidecontentwrapper.classList.toggle('margin');
    asidee.classList.toggle('sm-hide');
    asidecontentwrapper.classList.toggle('padding');

  

});
