
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

const menuButtons = document.querySelectorAll('.menu-button');


for(const menuButton of menuButtons){
    menuButton.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
    
        sidebar.style.display = 'block'
        window.scrollTo({
            top: 0
        });
        disableScroll();
    });
}

const closeButton = document.querySelector('.close-button');
    
closeButton.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display = 'none'
    enableScroll();
});





function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
}

function enableScroll() {
    document.body.style.overflow = '';
    document.body.style.height = '';
}

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.header-text, .scroll-header-text, .sidebar-text');
    
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');

            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
});