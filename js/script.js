
let toggleNavStatus = false;
 export let toggleNav2 = function() {
    let getSidebar = document.querySelector('.nav-sidebar');
    let getSidebarUl = document.querySelector('.nav-sidebar ul');
    let getSidebarLinks = document.querySelectorAll('.nav-sidebar a');

    if (toggleNavStatus === false) {
        getSidebar.style.visibility  = 'visible';
        getSidebar.style.width = '100%';
        getSidebarLinks.forEach((item)=>{
            item.style.opacity = '1';
        });
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = '0px';
        getSidebarLinks.forEach((item)=>{
            item.style.opacity = '0';
        });
        getSidebar.style.visibility  = 'hidden';
        toggleNavStatus = false;
    }



} 


// window.addEventListener('scroll',()=>{
//     let getSidebar = document.querySelector('.nav-sidebar');
//     let ContentPosition = getSidebar.getBoundingClientRect().top;
//     let ScreenPosition = window.innerHeight;
//     if(ContentPosition < ScreenPosition) {
//         getSidebar.style.visibility  = 'visible';
//     } 
//     else{
//         getSidebar.style.visibility  = 'hidden';
//         alert('nfjkrewfkjef');
//     };
// });


// window.addEventListener('scroll',()=>{
//     let content = document.querySelector('.good1');
//     let ContentPosition = content.getBoundingClientRect().top;
//     let ScreenPosition = window.innerHeight;
//     if(ContentPosition < ScreenPosition) {
//         content.classList.add('active11');
//     } 
//     else{
//         content.classList.remove('active11');
//     };
// });


// window.addEventListener('scroll',()=>{
//     let content2 = document.querySelectorAll('.poster11');
//     content2.forEach((item)=>{
//         let ContentPosition2 = item.getBoundingClientRect().top;
//         let ScreenPosition = window.innerHeight;
//         if(ContentPosition2 < ScreenPosition) {
//             item.classList.add('goodjob');
//         } 
//         else{
//             item.classList.remove('goodjob');
//     };
//     })
// });

// const links5 = document.querySelectorAll('.col-6');
// links5.forEach((item)=>{
//     window.addEventListener('scroll',()=>{
//         let ContentPosition3 = item.getBoundingClientRect().top;
//         let ScreenPosition = window.innerHeight;
//         if(ContentPosition3 < ScreenPosition) {
//             item.classList.add('coltime');
//         } 
//         else{
//             item.classList.remove('coltime');
//         };
//     });
// });  


// const links = document.querySelectorAll('.js11');
// links.forEach((item)=>{
//     item.addEventListener('click',()=>
//     {
//         let el = document.getElementById(item.getAttribute('data-link'));
//         el.scrollIntoView({behavior:'smooth',block:'start'});
//     })
// });






