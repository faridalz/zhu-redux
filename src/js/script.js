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






