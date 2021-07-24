
let toggleNavStatus = false;

export let toggleNav2 = function() {
    let getSidebar = document.querySelector('.navbar-nav');
    let spotify = document.querySelector('.navbar-nav .spotifyLogo');
    let music = document.querySelector('.navbar-nav .musicLogo');
    let deezer = document.querySelector('.navbar-nav .deezerLogo');
    let sound = document.querySelector('.navbar-nav .soundLogo');
    if (toggleNavStatus === false) {
        getSidebar.style.visibility  = 'visible';    
        getSidebar.style.width = '100%';
        spotify.style.visibility = "visible";
        deezer.style.visibility = "visible";
        sound.style.visibility = "visible";
        music.style.visibility = "visible";
        toggleNavStatus = true;
        
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = '0px';
        getSidebar.style.visibility  = 'hidden';
        spotify.style.visibility = "hidden";
        deezer.style.visibility = "hidden";
        sound.style.visibility = "hidden";
        music.style.visibility = "hidden";
        toggleNavStatus = false;
        }



} 


export let toggleNav3 = function() {
    if(window.innerWidth < 767){
        let getSidebar1 = document.querySelector('.navbar-nav');
        let spotify = document.querySelector('.navbar-nav .spotifyLogo');
        let music = document.querySelector('.navbar-nav .musicLogo');
        let deezer = document.querySelector('.navbar-nav .deezerLogo');
        let sound = document.querySelector('.navbar-nav .soundLogo');
        spotify.style.visibility = "hidden";
        deezer.style.visibility = "hidden";
        sound.style.visibility = "hidden";
        music.style.visibility = "hidden";
        getSidebar1.style.width = '0px';
        toggleNavStatus = false;
    }
}


export function menuToggle(){
    const toggleMenu=document.querySelector('.toggleMenu');
    toggleMenu.classList.toggle('active');
}




window.addEventListener('scroll',()=>{
    let links5 = document.querySelectorAll('.col-md-4');
    links5.forEach((item)=>{
        let ContentPosition3 = item.getBoundingClientRect().top;
        let ScreenPosition = window.innerHeight;
        if(ContentPosition3 < ScreenPosition) {
            item.classList.add('active');
        } 
        else{
            item.classList.remove('active');
    };
    })
}); 






