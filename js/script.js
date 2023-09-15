const hamMenu = document.querySelector('nav.navbar .ham-menu');
const navMenu = document.querySelector('nav.navbar div.menu-content')

hamMenu.onclick = () => {
    navMenu.classList.toggle('active');
}

document.addEventListener('click', function(e){
    if(!hamMenu.contains(e.target)){
        navMenu.classList.remove('active');
    }
});
