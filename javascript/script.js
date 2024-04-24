
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

const menuButton = document.querySelector('.menu-button');



menuButton.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display = 'block'
    window.scrollTo({
        top: 0
    });
    disableScroll();
});

const closeButton = document.querySelector('.close-button');
    
closeButton.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display = 'none'
    enableScroll();
});





let rootElement = document.documentElement;


function disableScroll() {

    let scrollTop = window.pageYOffset || rootElement.scrollTop;
    let scrollLeft = window.pageXOffset || rootElement.scrollLeft;


    rootElement.dataset.scrollY = scrollTop;
    rootElement.dataset.scrollX = scrollLeft;


    rootElement.style.position = 'fixed';
    rootElement.style.overflow = 'hidden';
    rootElement.style.top = -scrollTop + 'px';
    rootElement.style.left = -scrollLeft + 'px';
}


function enableScroll() {

    let scrollTop = parseInt(rootElement.dataset.scrollY || '0', 10);
    let scrollLeft = parseInt(rootElement.dataset.scrollX || '0', 10);


    rootElement.style.position = '';
    rootElement.style.overflow = '';
    rootElement.style.top = '';
    rootElement.style.left = '';


    window.scrollTo(scrollLeft, scrollTop);
}
