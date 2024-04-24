
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector('.scroll-header')

    if(scroll > 200){
        header.style.display = 'block';
    }
    else{
        header.style.display = 'none'; 
    }
});
